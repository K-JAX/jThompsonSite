import React, { Component } from "react";
import styled from "styled-components";

// components
import Nav from "./Nav";
import SocialMenu from "./SocialMenu";

class SidebarMenu extends Component {
	render() {
		return (
			<SidebarMenuElem>
				<Nav className="isHome" />
				<br />
				<SocialMenu className="isHome" />
			</SidebarMenuElem>
		);
	}
}

export default SidebarMenu;

const SidebarMenuElem = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.menuBox {
		a {
			&:after {
				/* content: " -"; */
			}
		}
	}
`;
