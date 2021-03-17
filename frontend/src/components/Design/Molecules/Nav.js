import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withApollo } from "react-apollo";
import { compose } from "recompose";
import gql from "graphql-tag";
import Config from "../../../config";

// import { AUTH_TOKEN } from '../../constants';

// Components
import Loader from "../Atoms/Loader";

/**
 * GraphQL menu query
 * Gets the labels, types (internal or external) and URLs
 */
const MENU_QUERY = gql`
	query MenuQuery {
		menu(id: "Main Menu", idType: NAME) {
			id
			name
			menuItems {
				edges {
					node {
						id
						label
						target
						title
						url
					}
				}
			}
		}
	}
`;
// Checks if urltype is internal or external

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menus: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		this.executeMenu();
	}

	/**
	 * Execute the menu query, parse the result and set the state
	 */
	executeMenu = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: MENU_QUERY,
		});
		const menus = result.data.menu;
		// const menus = result.data.menus.nodes[0].menuItems.edges;
		this.setState({
			menus,
			isLoaded: true,
		});
	};

	render() {
		const { menus, isLoaded } = this.state;
		const { pathname, className, children, onClick } = this.props;
		let isHome;

		if (isLoaded === false) {
			return (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ height: "300px" }}
				>
					<Loader />
				</div>
			);
		}

		if (pathname === "/") {
			isHome = true;
		}

		return (
			<MainNav className={`menuBox ${className}`}>
				{menus.menuItems.edges.map((menu, i) => {
					if (
						menu.node.url.startsWith(Config.baseUrl) ||
						menu.node.url.startsWith("/")
					) {
						const slugPath = menu.node.url.replace(
							Config.baseUrl,
							""
						);
						return (
							<Link
								key={menu.node.label}
								to={slugPath}
								target={
									menu.node.target == null
										? "_self"
										: menu.node.target
								}
								className={`ml1 no-underline black ${
									isHome ? "active" : ""
								}`}
								style={
									{
										/*transitionDelay: `${i * 0.2}s`*/
									}
								}
								title={menu.node.title}
								onClick={onClick}
							>
								<span>{menu.node.label}</span>
							</Link>
						);
					}
					return (
						<a
							key={menu.node.label}
							href={menu.node.url}
							target={
								menu.node.target == null
									? "_self"
									: menu.node.target
							}
							className="ml1 no-underline black"
							style={
								{
									/* transitionDelay: `${i * 0.1}s` */
								}
							}
							title={menu.node.title}
						>
							<span>{menu.node.label}</span>
						</a>
					);
				})}
				{children}
			</MainNav>
		);
	}
}

export default compose(
	// withRouter,
	withApollo
)(Nav);

const MainNav = styled.nav`
	position: relative;
	z-index: 3;
	&.isHome {
		background-color: rgba(240, 234, 229, 0.8);
	}
	a {
		display: inline;
		transition: 0.25s;
		overflow: hidden;
		span {
			display: inline-block;
			/* transform: translateX(-150px); */
		}
		&:hover {
			opacity: 0.4;
		}
	}
	&.pullout {
		a {
			color: white !important;
		}
	}
`;
