import React, { Component } from "react";
import styled from "styled-components";

class TripleArrow extends Component {
	render() {
		const { isHovered, alignment, color, direction, animate } = this.props;

		let rotation;
		switch (direction) {
			case "up":
				rotation = "-90";
				break;
			case "right":
				rotation = "0";
				break;
			case "down":
				rotation = "90";
				break;
			case "left":
				rotation = "180";
				break;
			default:
				rotation = "90";
		}

		return (
			<ArrowBox
				rotation={rotation}
				color={color}
				className={` 
					${alignment}
					${isHovered ? " hovering" : ""}
					${animate ? "animated" : ""}
					`}
			>
				<div className="arrow one" />
				<div className="arrow two" />
				<div className="arrow three" />
			</ArrowBox>
		);
	}
}

export default TripleArrow;

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
		margin-left: -5px;
		border: 2px solid ${(props) => props.color};
		border-top: none;
		border-left: none;
		transition: margin 0.25s;
		transform: rotate(-45deg);
		&.one {
			opacity: 0.45;
		}
		&.two {
			opacity: 0.75;
		}
		&.three {
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
			&.one {
				animation: oneOscillateOpacity 3s infinite;
				animation-delay: 0;
			}
			&.two {
				animation: twoOscillateOpacity 3s infinite;
				animation-delay: 0.15s;
			}
			&.three {
				animation: threeOscillateOpacity 3s infinite;
				animation-delay: 0.3s;
			}
		}
		@keyframes oneOscillateOpacity {
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
				opacity: 0.95;
			}
			80% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
	}
`;
