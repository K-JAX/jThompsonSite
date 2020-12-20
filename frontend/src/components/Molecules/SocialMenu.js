import React, { Component } from "react";
// import SocialMediaButtons from "react-social-media-buttons";
import styled from "styled-components";
import { withApollo } from "react-apollo";
import { compose } from "recompose";
import gql from "graphql-tag";

// Component
import SocialIcon from "../Atoms/SocialIcon";

const SOCIAL_MENU_QUERY = gql`
	query MenuQuery {
		menu(id: "Social Menu", idType: NAME) {
			id
			name
			menuItems {
				edges {
					node {
						id
						label
						title
						url
						target
					}
				}
			}
		}
	}
`;

// const links = [
// 	"https://www.facebook.com/profile.php?id=100057185781209",
// 	"https://www.linkedin.com/in/joseph-thompson-71b82811/",
// ];

// const buttonStyle = {
// 	backgroundColor: "transparent",
// 	width: "36px",
// 	height: "36px",
// 	margin: "0px 10px",
// 	border: "1px solid #000000",
// 	borderBottom: "3px solid #000000",
// };

// const iconStyle = { color: "#000000" };
class SocialMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: {},
			isLoaded: false,
		};
	}

	componentDidMount() {
		this.executeQuery();
	}

	executeQuery = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: SOCIAL_MENU_QUERY,
		});
		const { menu } = result.data;
		// const menus = result.data.menus.nodes[0].menuItems.edges;
		// const menuLinks = menu.menuItems.edges.map(
		// 	(menuItem) => menuItem.node.url
		// );
		this.setState({
			menu,
			isLoaded: true,
		});
	};

	render() {
		const { menu, isLoaded } = this.state;
		if (!isLoaded) {
			return <p>Loading social menu.</p>;
		}

		return (
			<SocialNavElem className="social-nav">
				{menu.menuItems.edges.map((menuItem) => (
					<SocialIcon
						link={menuItem.node.url}
						target={menuItem.node.target}
						key={menuItem.node.id}
					/>
				))}
			</SocialNavElem>
		);
	}
}
export default compose(
	// with Router,
	withApollo
)(SocialMenu);

const SocialNavElem = styled.nav`
	padding-left: 50px;
`;
