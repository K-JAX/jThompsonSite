import React from "react";
import styled from "styled-components";

// components
import { SlideshowContext } from "../Organisms/Slideshow";

export const SlideControls = (props) => {
	let total = props.total !== undefined ? `/ 0${props.total + 1}` : "";
	return (
		<SlideshowContext.Consumer>
			{(context) => (
				<ControlsDiv className="controls">
					<div className="slide-count">
						<span className="index">0{context.slideIndex + 1}</span>
						<span className="total">{total}</span>
					</div>
					<button className="prev" onClick={context.removeIndex}>
						{/* &larr; */}
					</button>
					<button className="next" onClick={context.addIndex}>
						{/* &rarr; */}
					</button>
				</ControlsDiv>
			)}
		</SlideshowContext.Consumer>
	);
};

export default SlideControls;

const ControlsDiv = styled.div`
	position: absolute;
	z-index: 3;
	bottom: 0;
	background: white;
	display: inline-flex;
	padding: 20px;
	button {
		outline: none;
		border: none;
		background: none;
		font-size: 1.5em;
		padding: 0 1.15em;
		position: relative;
		&:before,
		&:after {
			content: "";
			position: absolute;
		}
		&:before {
			background: gray;
			width: 75%;
			height: 2px;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
		}
		&:after {
			width: 7px;
			height: 7px;
			top: 0;
			bottom: 1px;
			margin: auto;
			border: 1px solid black;
			border-bottom: none;
			border-left: none;
		}
		&.prev:after {
			transform: rotate(-135deg);
			left: 7px;
		}
		&.next:after {
			transform: rotate(45deg);
			right: 7px;
		}
	}
	.slide-count {
		display: flex;
		margin-right: 2em;
		.index {
			font-size: 1.8em;
		}
		.total {
			opacity: 0.5;
		}
	}
`;
