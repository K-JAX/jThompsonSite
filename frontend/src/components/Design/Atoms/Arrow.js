import React, { Component } from "react";
import styled from "styled-components";

class Arrow extends Component {
	render() {
		const { isHovered, alignment, color, direction, animate, className } =
			this.props;
		let { num } = this.props;
		if (num === undefined) num = 1;

		var arrows = [];
		for (var i = 0; i < num; i++) {
			arrows.push(<div key={i} className={`arrow arrow-${i}`}></div>);
		}

		let rotation;
		switch (direction) {
			case "up":
				rotation = "90";
				break;
			case "right":
				rotation = "180";
				break;
			case "down":
				rotation = "270";
				break;
			case "left":
				rotation = "360";
				break;
			default:
				rotation = "270";
		}

		return (
			<ArrowBox
				num={num}
				rotation={rotation}
				color={color}
				className={` 
					${alignment}
					${className}
					${isHovered ? " hovering" : ""}
					${animate ? "animated" : ""}
					`}
			>
				{arrows}
			</ArrowBox>
		);
	}
}
export default Arrow;

const ArrowBox = styled.div`
	width: 53px;
	/* height: 100%; */
	opacity: 0.45;
	transition: 0.25s;
	transform: rotate(${(props) => props.rotation}deg);
	.arrow {
		display: inline-block;
		width: 15px;
		height: 15px;
		margin-left: ${(props) => props.num * props.num * -0.5}px;
		border: 2px solid ${(props) => props.color};
		border-top: none;
		border-left: none;
		transition: margin 0.25s;
		transform: rotate(135deg);
		&.arrow-0 {
		}
		&.arrow-1 {
			opacity: 0.75;
		}
		&.arrow-2 {
			opacity: 0.45;
		}
	}
	&.hovering {
		opacity: 1;
	}

	&.left {
		.arrow {
			margin-left: -12px;
			transform: rotate(135deg);
			float: right;
		}
		&.hovering {
			.arrow {
				margin-left: 0;
			}
		}
	}

	&.right {
		.arrow {
			margin-right: -12px;
			transform: rotate(-45deg);
		}
		&.hovering {
			.arrow {
				margin-right: 0;
			}
		}
	}
	&.animated {
		.arrow {
			&.arrow-0 {
				animation: oneOscillateOpacity 3s infinite;
				animation-delay: 0.3s;
			}
			&.arrow-1 {
				animation: twoOscillateOpacity 3s infinite;
				animation-delay: 0.15s;
			}
			&.arrow-2 {
				animation: threeOscillateOpacity 3s infinite;
				animation-delay: 0;
			}
		}
		@keyframes oneOscillateOpacity {
			0% {
				opacity: 0;
			}
			10% {
				opacity: 0.95;
			}
			80% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes twoOscillateOpacity {
			0% {
				opacity: 0;
			}
			10% {
				opacity: 0.75;
			}
			50% {
				opacity: 0.65;
			}
			80% {
				opacity: 0.6;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes threeOscillateOpacity {
			0% {
				opacity: 0;
			}
			10% {
				opacity: 0.55;
			}
			50% {
				opacity: 0.45;
			}
			80% {
				opacity: 0.35;
			}
			100% {
				opacity: 0;
			}
		}
	}
	&.long {
		position: relative;
		.arrow {
			height: 100%;
			outline: none;
			border: none;
			background: none;
			font-size: 1.5em;
			padding: 0 1.15em;
			position: relative;
			transform: rotate(180deg);
			right: 12%;
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
				top: -1px;
				bottom: 0px;
				right: 7px;
				margin: auto;
				border: 1px solid black;
				border-bottom: none;
				border-left: none;
				transform: rotate(45deg);
			}
		}
	}
`;
