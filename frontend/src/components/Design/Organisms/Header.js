import { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { withBreakpoints } from "react-breakpoints";
import { compose } from "recompose";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

// components
import Logo from "../Atoms/Logo";
import Loader from "../Atoms/Loader";
import SidebarMenu from "../Molecules/SidebarMenu";
import PulloutMenu from "../Molecules/PulloutMenu";

// functions
import { SITE_SETTINGS_QUERY } from "../../Functional/queries";

const Header = (props) => {
	const { isHome, breakpoints, currentBreakpoint } = props;
	const [mobileMenuActive, setMobileMenuActive] = useState("");
	const [headerClass, setHeaderClass] = useState("");

	const { loading, error, data } = useQuery(SITE_SETTINGS_QUERY);
	useEffect(() => {
		if (!isHome || breakpoints[currentBreakpoint] <= breakpoints.lg) {
			setTimeout(() => setHeaderClass("normal"), 300);
		} else {
			setHeaderClass("home");
		}
	}, [isHome]);
	if (loading) return <div>{/*Silent Loading*/}</div>;
	if (error) return `Error: ${error}`;

	let { title, description } = data.generalSettings;
	let { faviconUrl } = data;

	const handleClick = () => {
		setMobileMenuActive(mobileMenuActive ? false : true);
	};

	const menuVariants = {
		moveIn: { x: "0%", transition: { type: "tween", delay: 1.1 } },
		moveOut: { x: "-100%", transition: { type: "tween", delay: 0 } },
	};

	return (
		<HeaderElement
			id="site-header"
			className={`${headerClass} flex pa1 justify-between`}
		>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{`${title} - ${description}`}</title>
				<link rel="canonical" href="https://jThompsonArchitect.com" />
				<link rel="icon" type="image/png" href={faviconUrl} />
			</Helmet>
			<div className="d-flex flex flex-fixed black">
				<Logo isHome={isHome} menuActive={mobileMenuActive} />
				<AnimatePresence exitBeforeEnter>
					{isHome &&
					breakpoints[currentBreakpoint] > breakpoints.lg ? (
						<motion.div
							className="h-100"
							key="sidebar"
							variants={menuVariants}
							initial={{ x: `-100%` }}
							animate="moveIn"
							exit="moveOut"
						>
							<SidebarMenu />
						</motion.div>
					) : (
						<PulloutMenu
							burgerOnClick={handleClick}
							menuActive={mobileMenuActive}
						/>
					)}
				</AnimatePresence>
			</div>
		</HeaderElement>
	);
};
export default compose(withBreakpoints)(Header);

const HeaderElement = styled.header`
	z-index: 12;
	position: fixed;
	display: flex;
	top: 0;
	&.home {
		float: left;
		width: 277px;
		height: 100%;
		.flex {
			flex-direction: column;
		}
		@media all and (max-width: 992px) {
			float: none;
			width: 100%;
			height: 143px;
			padding: 0;
			.flex {
				width: 100%;
				flex-direction: row;
			}
		}
	}
	&.normal {
		width: 100%;
		height: 143px;
		padding: 0;
		.flex {
			width: 100%;
			flex-direction: row;
		}
		@media all and (max-width: 767px) {
			height: 80px;
			background: white;
		}
	}
`;
