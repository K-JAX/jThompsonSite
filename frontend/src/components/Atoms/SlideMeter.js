import React, { Component } from "react";
import styled from "styled-components";

class SlideMeter extends Component {
	render() {
		const { progress } = this.props;
		return <SlideMeterDiv progress={progress} />;
	}
}

export default SlideMeter;

const SlideMeterDiv = styled.div`
	position: relative;
	width: 100%;
	height: 1px;
	background: #ccc;
	&:after {
		content: "";
		position: absolute;
		width: ${(props) => props.progress}%;
		height: 2px;
		background: black;
		top: 0;
		left: 0;
		opacity: 0.4;
		transition: 0.1s;
	}
`;
