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
			<div>
				{alignment === "left" ? (
					<LinkBox className={isHovered ? "hovered" : ""}>
						<Arrow isHovered={isHovered} alignment={alignment} />
						<Link className={className} to={link} alt={linkAlt}>
							{children}
						</Link>
					</LinkBox>
				) : (
					<LinkBox className={isHovered ? "hovered" : ""}>
						<Link className={className} to={link} alt={linkAlt}>
							{children}
						</Link>
						<Arrow isHovered={isHovered} alignment={alignment} />
					</LinkBox>
				)}
			</div>
		);
	}
}

export default withApollo(CaptionLink);

const LinkBox = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	height: 100%;
	background-color: black;
	align-self: center;
	align-items: center;
	margin: 0;
	font-size: 1.15rem;
	text-decoration: none;
	color: white;
	font-weight: 100;
	padding: 0 8px;
	a {
		color: white;
		opacity: 0.55;
	}
	&.hovered a {
		opacity: 1;
	}
`;
