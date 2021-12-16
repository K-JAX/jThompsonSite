import React from "react";
import styled from "styled-components";

// components
import SlideStrip from "../Molecules/SlideStrip";

// functions
import { SlideshowContext } from "../Organisms/Slideshow";

const SlideControls = React.memo((props) => {
	const { contentType, images } = props;
	let total = props.total !== undefined ? `/ ${props.total + 1}` : "";
	return (
		<SlideshowContext.Consumer>
			{(context) => (
				<ControlsDiv className={`controls ${contentType}`}>
					{contentType === "descriptive" && (
						<div className="slide-count">
							<span className="index">
								{context.slideIndex + 1}
							</span>
							<span className="total">{total}</span>
						</div>
					)}
					<div
						className={`control-buttons ${
							contentType === "descriptive" ? "arrows" : "thumbs"
						}`}
					>
						<button
							className="prev arrow"
							onClick={() => context.subtractIndex(props.total)}
						></button>
						{contentType === "gallery" && (
							<SlideStrip thumbs={images} />
						)}
						<button
							className="next arrow"
							onClick={() => context.addIndex(2)}
						></button>
					</div>
				</ControlsDiv>
			)}
		</SlideshowContext.Consumer>
	);
});

export default SlideControls;

const ControlsDiv = styled.div`
	position: absolute;
	z-index: 3;
	bottom: 0;
	background: white;
	display: inline-flex;
	padding: 20px 4.2em;
	.control-buttons {
		display: flex;
		width: 100%;
		justify-content: center;
	}
	.prev,
	.next {
		height: 100%;
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
			opacity: 0.75;
			transition: 0.25s;
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
			left: 12%;
		}
		&.next:after {
			transform: rotate(45deg);
			right: 12%;
		}
		&:hover {
			&:before,
			&:after {
				opacity: 1;
			}
		}
	}
	.slide-count {
		display: flex;
		margin-right: 2em;
		align-items: flex-start;
		align-content: flex-start;
		.index {
			font-size: 1.8em;
			margin-right: 5px;
			line-height: 1.2;
		}
		.total {
			opacity: 0.5;
			white-space: nowrap;
		}
	}
	&.gallery {
		position: relative;
		width: 100%;
		justify-content: center;
		@media all and (max-width: 768px) {
			position: absolute;
			bottom: 0%;
		}
	}
	@media all and (max-width: 768px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0;
		.slide-count {
			position: relative;
			padding: 0.5em 1.5em;
			white-space: nowrap;
			&:after {
				content: "";
				position: absolute;
				height: 75%;
				width: 1px;
				background: #ccc;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
			}
		}
		.control-buttons {
			width: 100%;
			display: flex;
			&.arrows {
				.arrow {
					width: 50%;
					box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.125);
					&:before {
						height: 3px;
					}
					&:after {
						width: 14px;
						height: 14px;
						border-width: 2px;
					}
				}
			}
		}
	}
`;
