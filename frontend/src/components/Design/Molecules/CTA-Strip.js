import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components
import Arrow from "../Atoms/Arrow";

const CTAStrip = (props) => {
	let { text, url, alt, target, className } = props;
	target = target === undefined ? "_self" : target;
	if (target !== "_blank") {
		return (
			<Link to={url} alt={alt}>
				<StripDiv className={className}>
					{text}
					<div className="side-block d-flex align-items-center justify-content-center">
						<Arrow num={1} color={`#fff`} direction={`right`} />
					</div>
				</StripDiv>
			</Link>
		);
	}
	return (
		<a href={url} alt={alt} target={target}>
			<StripDiv className={className}>{text}</StripDiv>
		</a>
	);
};

export default CTAStrip;

const StripDiv = styled.div`
	position: relative;
	width: 100%;
	font-size: 1.65em;
	font-weight: 300;
	padding: 2em 0;
	text-align: center;
	text-transform: uppercase;
	color: #464853;
	border-bottom: 4px solid #464853;
	opacity: 0.8;
	background: #ffeeed;
	transition: 0.25s;
	.side-block {
		position: absolute;
		width: 45px;
		height: 100%;
		top: 0;
		right: 0;
		background: #464853;
		transition: 0.25s;
	}
	&:hover {
		opacity: 1;
		.side-block {
			width: 100px;
		}
	}
`;
