import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { withBreakpoints } from "react-breakpoints";
import { compose } from "recompose";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import gql from "graphql-tag";
import { Spring } from "react-spring/renderprops";

// Components
import Logo from "../Atoms/Logo";
import SidebarMenu from "../Molecules/SidebarMenu";
import PulloutMenu from "../Molecules/PulloutMenu";
import { SITE_SETTINGS_QUERY } from "../../Functional/queries";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			siteName: "Joseph Thompson Architect",
			siteDescription: "",
			faviconUrl: "",
			mobileMenuActive: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.executeQuery();
	}

	executeQuery = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: SITE_SETTINGS_QUERY,
		});
		this.setState({
			siteName: result.data.generalSettings.title,
			siteDescription: result.data.generalSettings.description,
			faviconUrl: result.data.faviconUrl,
		});
	};

	handleClick() {
		this.setState((state) => ({
			mobileMenuActive: state.mobileMenuActive ? false : true,
		}));
	}

	render() {
		const {
			siteName,
			siteDescription,
			faviconUrl,
			mobileMenuActive,
		} = this.state;
		const { isHome, breakpoints, currentBreakpoint } = this.props;
		return (
			<HeaderElement
				id="site-header"
				className={`${
					isHome && breakpoints[currentBreakpoint] > breakpoints.lg
						? "home"
						: "normal"
				} flex pa1 justify-between`}
			>
				<Helmet>
					<meta charSet="utf-8" />
					<title>{`${siteName} ${
						siteDescription !== "" ? "- " + siteDescription : ""
					}`}</title>
					<link
						rel="canonical"
						href="https://jThompsonArchitect.com"
					/>
					<link rel="icon" type="image/png" href={faviconUrl} />
				</Helmet>
				<Spring
					from={{ x: -100 }}
					to={{ x: 0 }}
					config={{ delay: 2500 }}
				>
					{(props) => {
						let transforms = isHome
							? {
									transform: `translateX(${props.x}%)`,
							  }
							: {};
						return (
							<div
								className="d-flex flex flex-fixed black"
								style={transforms}
							>
								<Logo
									isHome={isHome}
									menuActive={mobileMenuActive}
								/>
								{isHome &&
								breakpoints[currentBreakpoint] >
									breakpoints.lg ? (
									<SidebarMenu />
								) : (
									<PulloutMenu
										burgerOnClick={this.handleClick}
										menuActive={mobileMenuActive}
									/>
								)}
							</div>
						);
					}}
				</Spring>
			</HeaderElement>
		);
	}
}

export default compose(withApollo, withBreakpoints)(Header);

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
