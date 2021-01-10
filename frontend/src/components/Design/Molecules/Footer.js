import React from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { withBreakpoints } from "react-breakpoints";

// components
import SocialMenu from "./SocialMenu";

const Footer = (props) => {
	const { isHome, breakpoints, currentBreakpoint } = props;
	const isDesktopHome =
		isHome && breakpoints[currentBreakpoint] > breakpoints.lg;
	return (
		<FooterElement
			className={`flex center bottomsDown ${isDesktopHome ? "pl-5" : ""}`}
			isHome={isDesktopHome}
		>
			{isDesktopHome ? "" : <SocialMenu />}
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

export default compose(withBreakpoints)(Footer);

const FooterElement = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 1em;
	${(props) => (props.isHome ? "margin-left: 6em;" : "")}
	.social-nav {
		display: inline-block;
		margin: auto;
	}
`;
