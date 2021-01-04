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
				<div className="title-text">
					<p className="name">Joseph Thompson</p>
					<p className="title">Architect</p>
				</div>
			</LogoElement>
		</Link>
	);
};
export default Logo;

const LogoElement = styled.div`
	font-family: "Hind Siliguri", sans-serif;
	/* padding-top: 2.75em;
	padding-right: 1em;
	padding-bottom: 2.5em;
	padding-left: 50px; */
	padding: 2.75em 1em 2.5em 50px;
	white-space: nowrap;
	text-align: center;
	text-transform: uppercase;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	transition: 0.35s;
	&.home-logo {
		width: 165px;
		.initials {
			font-size: 115px;
			margin-bottom: 0.29em;
		}
		.title-text {
			font-size: 18px;
		}
	}
	&.normal-logo {
		width: 400px;
		background: white;
		.initials {
			width: 104px;
			font-size: 72px;
			margin-bottom: 0;
		}
		.title-text {
			font-size: 24px;
			margin-left: 0.35em;
		}
	}
	.initials {
		position: relative;
		display: inline-block;
		font-weight: 100;
		color: #464853;
		line-height: 0.5;
		transition: 0.35s;
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
	.title-text {
		display: inline-block;
		transition: 0.5s;
		p {
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
	}
`;
