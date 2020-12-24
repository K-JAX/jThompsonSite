import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";

class TitleDescription extends Component {
	render() {
		const { title, content, className } = this.props;
		return (
			<TitleDescriptionDiv className={`${className}`}>
				<h2>{title}</h2>
				<hr />
				<div>{content}</div>
			</TitleDescriptionDiv>
		);
	}
}

export default withApollo(TitleDescription);

const TitleDescriptionDiv = styled.div`
	text-align: center;
	line-height: 1.5;
	h2 {
		margin-bottom: 1rem;
		font-family: "Roboto", serif;
		/* font-style: italic; */
		/* font-size: 2.5rem; */
		font-weight: 300;
	}
	hr {
		border-top: 1px solid #ccc;
		border-bottom: none;
		margin-bottom: 1.25rem;
	}
`;
