import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Arrow from "./Arrow";

class CaptionLink extends Component {
	render() {
		const {
			isHovered,
			alignment,
			className,
			link,
			linkAlt,
			children,
		} = this.props;

		return (
			<div
				className={`d-flex ${
					alignment === "left"
						? "justify-content-end justify-content-md-start"
						: "justify-content-md-end"
				}`}
			>
				<Link className={className} to={link} alt={linkAlt}>
					<LinkBox
						alignment={alignment}
						className={isHovered ? "hovered" : ""}
					>
						<Arrow direction={alignment} isHovered={isHovered} />
						{children}
					</LinkBox>
				</Link>
			</div>
		);
	}
}

export default withApollo(CaptionLink);

const LinkBox = styled.div`
	display: inline-flex;
	color: white;
	background-color: black;
	margin: 0;
	font-size: 1rem;
	text-decoration: none;
	font-weight: 500;
	font-variant: small-caps;
	padding: 1em 1.25em;
	letter-spacing: 3px;
	opacity: 0.5;
	transition: 0.25s;
	${(props) =>
		props.alignment === "left"
			? "flex-direction: row;"
			: "flex-direction: row-reverse;"}
	a {
		color: white !important;
		opacity: 0.95;
	}
	&.hovered {
		color: white;
		opacity: 1;
	}
`;
