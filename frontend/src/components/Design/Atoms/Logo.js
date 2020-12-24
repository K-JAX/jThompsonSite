import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = (props) => {
	const { isHome } = props;
	return (
		<Link
			to="/"
			style={{ alignSelf: "start" }}
			className="no-underline black"
		>
			<LogoElement
				alt="Logo and Site Title"
				className={`${isHome ? "home-logo" : "normal-logo"}`}
			>
				<h1 className="initials">JTA</h1>
				<p className="name">Joseph Thompson</p>
				<p className="title">Architect</p>
			</LogoElement>
		</Link>
	);
};
export default Logo;

const LogoElement = styled.div`
	font-family: "Hind Siliguri", sans-serif;
	width: 165px;
	margin-left: 50px;
	white-space: nowrap;
	text-align: center;
	text-transform: uppercase;
	.initials {
		position: relative;
		font-size: 115px;
		font-weight: 100;
		color: #464853;
		margin-top: 0.75em;
		margin-bottom: 0.29em;
		line-height: 0.5;
		&:before,
		&:after {
			content: "";
			position: absolute;
			width: 100%;
			height: 4px;
			left: 0;
			background: #464853;
		}
		&:before {
			top: -0.24em;
		}
		&:after {
			bottom: -0.185em;
		}
	}
	p {
		font-size: 18px;
		margin-top: 0.7em;
		line-height: 0.5;
	}
	.name {
		opacity: 0.65;
		font-weight: 100;
		margin-bottom: 0.2em;
		letter-spacing: 0.05em;
	}
	.title {
		font-weight: 600;
		letter-spacing: 0.5em;
		margin-left: 0.125em;
	}
`;
