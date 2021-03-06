import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import Arrow from "../Atoms/Arrow";
import { Button } from "../Atoms/Button";

export const EntryTitle = (props) => {
	const storeCookie = () => {
		var date = new Date();

		document.cookie =
			"visited=true; expires=" + date.setDate(date.getDate() + 1);
	};
	let { message } = props;
	let userMessage = message.startsWith("Coming Soon")
		? "Coming Soon"
		: "Under Maintenance";
	return (
		<EntrySignDiv>
			<h1>
				Joseph Thompson
				<br />
				<strong>Architect</strong>
			</h1>
			{message === "" || message === undefined ? (
				<Link
					to={{
						pathname: "/",
						state: { from: "intro" },
					}}
					onClick={storeCookie}
				>
					<Button priority="circular">
						<span className="mb-2">Click to enter</span>
						<br />
						<Arrow direction="up" />
					</Button>
				</Link>
			) : (
				<Button priority="circular">
					<span className="mb-2">{userMessage}</span>
				</Button>
			)}
		</EntrySignDiv>
	);
};

EntryTitle.propTypes = {
	comingSoon: PropTypes.bool,
};

EntryTitle.defaultProps = {
	comingSoon: false,
};

const EntrySignDiv = styled.div`
	text-align: center;
	margin: auto;
	color: #464853;
	h1 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 100;
		line-height: 1.1;
		strong {
			font-weight: 500;
			margin-left: 14px;
			letter-spacing: 14px;
		}
	}
`;
