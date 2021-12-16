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
			<small className="center">
				&copy;{new Date().getFullYear()} JTA
			</small>
		</FooterElement>
	);
};
export default compose(withBreakpoints)(Footer);

const FooterElement = styled.footer`
	position: absolute;
	/* top: calc(100vh - 100px); */
	bottom: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 1em;
	${(props) => (props.isHome ? "margin-left: 6em;" : "")}
	.social-nav {
		display: inline-block;
		margin: 0 auto;
	}
	small {
		width: 100%;
		text-align: center;
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;
