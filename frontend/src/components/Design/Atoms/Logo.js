import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withBreakpoints } from "react-breakpoints";
import { compose } from "recompose";
import styled from "styled-components";
import { motion } from "framer-motion";

import { getPreviousPath } from "../../Functional/GetPreviousPath";

import Config from "../../../config";

const Logo = (props) => {
	const { isHome, breakpoints, currentBreakpoint, menuActive, onClick } =
		props;
	const paths = getPreviousPath();
	const [headerClass, setHeaderClass] = useState("");

	useEffect(() => {
		if (!isHome || breakpoints[currentBreakpoint] <= breakpoints.lg) {
			setTimeout(() => setHeaderClass("normal-logo"), 300);
		} else {
			setHeaderClass("home-logo");
		}
	}, [isHome]);

	const linkEvent = (e) => {
		if (isHome) {
			e.preventDefault();
		}
		menuActive && onClick();
	};

	return (
		<Link
			to="/"
			style={{ alignSelf: "start" }}
			className={`text-decoration-none black align-self-center align-self-md-start ${
				menuActive ? "position-relative z-10" : ""
			}`}
			onClick={linkEvent}
		>
			<LogoElement
				alt="Logo and Site Title"
				className={`${headerClass} ${menuActive && "menu-active"}`}
				initial={{
					x: `${isHome && paths["prevUrl"] !== "/" ? 0 : -150}%`,
				}}
				animate={{ x: 0 }}
				transition={{ type: "Inertia", delay: 1 }}
			>
				<h1 className="initials">JTA</h1>
				<div className="title-text">
					<p className="name">Joseph Thompson</p>
					<p className="title">Architect</p>
				</div>
			</LogoElement>
		</Link>
	);
};
export default compose(withBreakpoints)(Logo);

const LogoElement = styled(motion.div)`
	font-family: "Hind Siliguri", sans-serif;
	padding: 2.75em 1em 2.5em 50px;
	white-space: nowrap;
	text-align: center;
	text-transform: uppercase;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	transition: width 0.35s, background 0.35s;
	will-change: transform;
	&.home-logo {
		width: 165px;
		.initials {
			font-size: 115px;
			margin-bottom: 0.29em;
		}
		.title-text {
			font-size: 18px;
		}
	}
	&.normal-logo {
		width: 435px;
		background: white;
		.initials {
			width: 104px;
			font-size: 72px;
			margin-bottom: 0;
		}
		.title-text {
			font-size: 24px;
			margin-left: 0.35em;
		}
	}
	.initials {
		position: relative;
		display: inline-block;
		font-weight: 100;
		color: #464853;
		line-height: 0.5;
		transition: 0.35s;
		&:before,
		&:after {
			content: "";
			position: absolute;
			width: 100%;
			height: 4px;
			left: 0;
			background: #464853;
		}
		&:before {
			top: -0.24em;
		}
		&:after {
			bottom: -0.185em;
		}
	}
	.title-text {
		display: inline-block;
		transition: 0.5s;
		p {
			margin-top: 0.7em;
			line-height: 0.5;
		}
		.name {
			opacity: 0.65;
			font-weight: 100;
			margin-bottom: 0.2em;
			letter-spacing: 0.05em;
		}
		.title {
			font-weight: 600;
			letter-spacing: 0.5em;
			margin-left: 0.125em;
		}
		@media all and (max-width: 767px) {
			display: none;
		}
	}

	@media all and (max-width: 767px) {
		padding: 0 0 0 20px;
		&.normal-logo {
			width: auto;
			.initials {
				width: auto;
				font-size: 48px;
				&:before,
				&:after {
					height: 3px;
				}
			}
		}
	}
	&.menu-active {
		background: transparent;
		.initials {
			color: white;
			&:before,
			&:after {
				background: white;
			}
		}
		.title-text {
			color: white;
		}
	}
`;
