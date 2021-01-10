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
		this.setState({
			menu,
			isLoaded: true,
		});
	};

	render() {
		const { menu, isLoaded } = this.state;
		const { className } = this.props;
		if (!isLoaded) {
			return <p>Loading social menu.</p>;
		}

		return (
			<SocialNavElem
				className={`social-nav ${className ? className : ""}`}
			>
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
	&.isHome {
		padding-left: 50px;
	}
`;
