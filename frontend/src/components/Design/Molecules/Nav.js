import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withApollo } from "react-apollo";
import { compose } from "recompose";
import gql from "graphql-tag";
import Config from "../../../config";

// import { AUTH_TOKEN } from '../../constants';

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
		const { pathname, className } = this.props;
		let isHome;

		if (isLoaded === false) {
			return <p>Loading menu</p>;
		}

		if (pathname === "/") {
			isHome = true;
		}

		return (
			<MainNav className={`menuBox ${className}`}>
				{menus.menuItems.edges.map((menu) => {
					if (menu.node.url.startsWith(Config.baseUrl)) {
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
								title={menu.node.title}
							>
								{menu.node.label}
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
							title={menu.node.title}
						>
							{menu.node.label}
						</a>
					);
				})}
			</MainNav>
		);
	}
}

export default compose(
	// withRouter,
	withApollo
)(Nav);

const MainNav = styled.nav`
	a {
		transition: 0.25s;
		&:hover {
			opacity: 0.4;
		}
	}
`;
