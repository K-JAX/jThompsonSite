import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Burger = (props) => {
	const [isHovered, setHovered] = useState(false);
	const { onClick, burgerIsActive } = props;

	let burgerStatus = "";
	if (burgerIsActive === true) {
		burgerStatus = "activeBurger";
	} else if (burgerIsActive === false) {
		burgerStatus = "cancelBurger";
	}

	return (
		<Patty
			type="button"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={onClick}
			className={`burger ${isHovered && "hovering"} ${burgerStatus}`}
		>
			<div className="bread-ham-cheese" />
		</Patty>
	);
};
export default Burger;

Burger.propTypes = {
	onClick: PropTypes.func,
};

Burger.defaultProps = {
	burgerIsActive: "",
};

const duration = 1.25;

const Patty = styled.button`
	opacity: 1;
	justify-self: end;
	align-self: center;
	position: relative;
	z-index: 10;
	width: 46px;
	height: 28px;
	margin-left: auto;
	padding: 0;
	margin-right: 20px;
	border: none;
	overflow: hidden;
	background: transparent;
	cursor: pointer;
	animation: ${duration}s moveIn forwards;
	transition: 1s;

	.bread-ham-cheese {
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-top: 2px solid black;
		transition: border 0s ${duration / 2}s, width 0.5s;
		&:before,
		&:after {
			content: "";
			position: absolute;
			height: 1px;
			border-top: 2px solid black;
			right: 0;
			bottom: 2px;
			margin: auto;
			transition: 0.5s;
		}
		&:before {
			width: 45%;
			top: 0px;
		}
		&:after {
			width: 75%;
		}
	}
	&.hovering {
		.bread-ham-cheese {
			width: 90%;
			&:before {
				width: 65%;
			}
			&:after {
				width: 85%;
			}
		}
	}
	&.cancelBurger {
		animation: ${duration}s hideCancel forwards;
		.bread-ham-cheese {
			&:before {
				animation: ${duration}s reverseBackSlash forwards;
			}
			&:after {
				animation: ${duration}s reverseForwardSlash forwards;
			}
		}
	}

	&.activeBurger {
		animation: ${duration}s showCancel forwards;
		.bread-ham-cheese {
			border-top: 0 solid black;
			transition: border 0s ${duration / 3}s;

			&:before {
				animation: ${duration}s rotateBackSlash forwards;
				border-color: white;
			}
			&:after {
				animation: ${duration}s rotateForwardSlash forwards;
				border-color: white;
			}
		}
		&.hovering {
			.bread-ham-cheese {
				width: 100%;
				opacity: 0.8;
				transform: scale(0.8);
				transition: 0.25s;
				&:before {
					width: 45%;
				}
				&:after {
					width: 75%;
				}
			}
		}
	}
	@keyframes moveIn {
		0% {
			width: 0;
		}
		100% {
			width: 46px;
		}
	}
	@keyframes showCancel {
		0% {
			width: 46px;
		}
		30% {
			width: 0;
			opacity: 1;
			transform: rotateZ(0);
		}
		31% {
			width: 46px;
			opacity: 0;
			transform: rotateY(60deg) rotateX(-60deg);
		}
		100% {
			opacity: 1;
			transform: rotateY(0deg) rotateX(0deg);
		}
	}

	@keyframes hideCancel {
		0% {
			width: 46px;
			opacity: 1;
		}
		50% {
			width: 46px;
			opacity: 0;
		}
		51% {
			width: 0;
			opacity: 1;
		}
		100% {
			width: 46px;
			opacity: 1;
		}
	}

	@keyframes rotateBackSlash {
		0% {
			transform: rotate(0deg);
		}
		30% {
			width: 45%;
			transform: rotate(0deg);
		}
		31% {
			top: 0%;
			bottom: 0;
			width: 100%;
			transform: rotate(45deg);
		}
		100% {
			top: 0;
			bottom: 0;
			width: 100%;
			transform: rotate(45deg);
		}
	}

	@keyframes reverseBackSlash {
		0% {
			top: 0;
			bottom: 0;
			width: 100%;
			transform: rotate(45deg);
		}
		50% {
			top: 0%;
			bottom: 0;
			width: 100%;
			transform: rotate(45deg);
		}
		51% {
			bottom: 2px;
			width: 0%;
			transform: rotate(0deg);
		}
		100% {
			width: 45%;
			transform: rotate(0deg);
		}
	}

	@keyframes rotateForwardSlash {
		0% {
			transform: rotate(0deg);
		}
		30% {
			width: 45%;
			transform: rotate(0deg);
		}
		31% {
			width: 100%;
			top: 0;
			bottom: 0;
			transform: rotate(-45deg);
		}
		100% {
			width: 100%;
			top: 0;
			bottom: 0;
			transform: rotate(-45deg);
		}
	}

	@keyframes reverseForwardSlash {
		0% {
			width: 100%;
			top: 0%;
			bottom: 0;
			transform: rotate(-45deg);
		}
		50% {
			width: 100%;
			top: 0;
			bottom: 0;
			transform: rotate(-45deg);
		}
		51% {
			width: 0%;
			transform: rotate(0deg);
		}
		100% {
			width: 75%;
			transform: rotate(0deg);
		}
	}

	&:focus {
		outline: none;
	}
`;
