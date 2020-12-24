import React, { Component } from "react";
import styled from "styled-components";
import iconsDb from "./iconsDb";

class SocialLink extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	returnDomainUrl = (url) => {
		const domains = Object.keys(iconsDb);

		const finalRegex = new RegExp(
			/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9]*)/
		);
		const extractedDomain = url.match(finalRegex)[1];

		return domains.includes(extractedDomain) ? extractedDomain : null;
	};

	render() {
		const { link } = this.props;
		let { target } = this.props;
		const extractedDomain = this.returnDomainUrl(link);
		if (!iconsDb[extractedDomain]) {
			return <p>Need links in social media list</p>;
		}
		target = target === "_blank" ? target : "_self";
		return (
			<SVGLink
				href={link}
				className="social-link"
				target={target}
				rel="noopener noreferrer"
			>
				<svg
					className="social-icon"
					width="40"
					height="40"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<IconPath icon={iconsDb[extractedDomain].icon} />
				</svg>
			</SVGLink>
		);
	}
}
export default SocialLink;

// Create individual components for the basic svg structure of every social nav link
const IconPath = (props) => {
	const { icon } = props;
	return <path className="icon-path" d={icon} fill="black" />;
};
const SVGLink = styled.a`
	display: inline-block;
	position: relative;
	border: 1px solid #999;
	margin: 0 0.5em;
	line-height: 0;
	&:first-of-type {
		margin-left: 0;
	}
	&:after {
		content: "";
		z-index: 0;
		position: absolute;
		width: 100%;
		height: 3px;
		left: 0;
		bottom: 0;
		background: black;
		transition: 0.2s;
	}
	svg {
		position: relative;
		z-index: 1;
		path {
			transition: 0.8s;
		}
	}
	&:hover {
		&:after {
			height: 100%;
			transform: translateZ(0);
		}
		svg path {
			fill: white;
		}
	}
`;
