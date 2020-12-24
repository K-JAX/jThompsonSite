import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { compose } from "recompose";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import gql from "graphql-tag";

// Components
import Logo from "../Atoms/Logo";
import SidebarMenu from "../Molecules/SidebarMenu";
import PulloutMenu from "../Molecules/PulloutMenu";

const SITE_SETTINGS_QUERY = gql`
	query MyQuery {
		generalSettings {
			title
			description
		}
		faviconUrl
	}
`;

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
		const { isHome } = this.props;
		return (
			<HeaderElement
				id="site-header"
				className={`${
					isHome ? "home" : "normal"
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

				<div className="flex flex-fixed black">
					<Logo isHome={isHome} />
					{isHome ? (
						<SidebarMenu />
					) : (
						<PulloutMenu
							burgerOnClick={this.handleClick}
							menuActive={mobileMenuActive}
						/>
					)}
				</div>
			</HeaderElement>
		);
	}
}

export default compose(withApollo)(Header);

const HeaderElement = styled.header`
	z-index: 10;
	position: fixed;
	top: 0;
	&.home {
		float: left;
		width: 277px;
		height: 100%;
		.flex {
			flex-direction: column;
		}
	}
	&.normal {
		width: 100%;
		height: 178px;
		padding: 0;
		.flex {
			width: 100%;
			flex-direction: row;
		}
	}
`;
