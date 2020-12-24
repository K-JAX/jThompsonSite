import React from "react";
import styled from "styled-components";
// components
import SocialMenu from "./SocialMenu";

const Footer = (props) => {
	const { isHome } = props;
	return (
		<FooterElement
			className={`topborder flex center bottomsDown ${
				isHome ? "pl-5" : ""
			}`}
			isHome={isHome}
		>
			{isHome ? "" : <SocialMenu />}
			<small
				className="center"
				style={{
					textAlign: "center",
					marginTop: "20px",
					marginBottom: "20px",
				}}
			>
				&copy;{new Date().getFullYear()} JTA
			</small>
		</FooterElement>
	);
};

export default Footer;

const FooterElement = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	${(props) => (props.isHome ? "margin-left: 6em;" : "")}
	.social-nav {
		display: inline-block;
		margin: auto;
	}
`;
