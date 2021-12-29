import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";

const TitleDescription = (props) => {
	const { title, content, className } = props;
	return (
		<TitleDescriptionDiv className={`${className} `}>
			<h2>{title}</h2>
			<hr />
			<div>{content}</div>
		</TitleDescriptionDiv>
	);
};
export default withApollo(TitleDescription);

const TitleDescriptionDiv = styled.div`
	text-align: center;
	line-height: 1.5;
	@media all and (max-width: 767px) {
		width: 100%;
	}
	h2 {
		margin-bottom: 1rem;
		font-family: "Roboto", serif;
		font-weight: 300;
	}
	hr {
		border-top: 1px solid #ccc;
		border-bottom: none;
		margin-bottom: 1.25rem;
	}
`;
