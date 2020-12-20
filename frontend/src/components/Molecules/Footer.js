import React from "react";
import styled from "styled-components";
// components
import SocialMenu from "./SocialMenu";

const Footer = (props) => {
	const { isHome } = props;
	return (
		<FooterElement className="topborder flex center bottomsDown">
			{isHome ? "" : <SocialMenu />}
			<small
				className="center"
				style={{
					textAlign: "center",
					marginTop: "20px",
					marginBottom: "20px",
				}}
			>
				845-343-8510 ©JTA
			</small>
		</FooterElement>
	);
};

export default Footer;

const FooterElement = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	.social-nav {
		display: inline-block;
		margin: auto;
	}
`;
