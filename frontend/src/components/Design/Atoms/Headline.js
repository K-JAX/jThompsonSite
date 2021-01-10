import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";

class Headline extends Component {
	render() {
		const { text, loaded, className } = this.props;
		return (
			<Heading
				className={`page-heading ${className} ${
					loaded ? "loaded" : ""
				}`}
			>
				{text}
			</Heading>
		);
	}
}

export default withApollo(Headline);

const Heading = styled.h1`
	position: relative;
	justify-self: end;
	font-size: 8.25rem;
	font-weight: 100;
	height: auto;
	display: inline-block;
	margin: 0;
	padding-right: 7rem;
	font-variant: small-caps;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		bottom: 0;
		border-bottom: 2px solid black;
	}
	&.loaded {
	}
`;
