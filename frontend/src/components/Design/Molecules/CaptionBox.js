import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";

// Components
import CaptionTitle from "../Atoms/CaptionTitle";
import CaptionLink from "../Atoms/CaptionLink";

class CaptionBox extends Component {
	render() {
		const { className, isHovered, alignment, children, link } = this.props;

		return (
			<Box
				className={`${className} ${
					alignment === "left" ? "left" : "right"
				}`}
			>
				<div
					className={`py-5 ${isHovered ? "hovering" : "nothovered"}`}
				>
					{children}
				</div>
				<CaptionLink
					className="link-box"
					isHovered={isHovered}
					alignment={alignment}
					link={link.url}
					linkAlt={`Link to my ${link.title} page.`}
				>
					{link.title}
				</CaptionLink>
			</Box>
		);
	}
}

export default withApollo(CaptionBox);

const Box = styled.figcaption`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&.left {
		.link-box {
			justify-self: flex-start;
			&:after {
				right: 0;
			}
		}
	}
	&.right {
		.link-box {
			&:after {
				left: 0;
			}
		}
	}
	.link-box {
		background-color: black;
		position: relative;
		&:after {
			content: "";
			position: absolute;
			bottom: 0;
			width: 100vw;
			height: 1px;
			background: black;
		}
	}
`;
