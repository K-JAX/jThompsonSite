import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Burger = (props) => {
	const [isHovered, setHovered] = useState(false);
	const [burgerStatus, setBurgerStatus] = useState(false);
	const { onClick, burgerIsActive } = props;

	useEffect(async () => {
		setBurgerStatus("transitionBurger");
		await new Promise((resolve) => setTimeout(resolve, 500));
		setBurgerStatus(
			burgerIsActive != false ? "activeBurger" : "cancelledBurger"
		);
	}, [burgerIsActive]);

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

const duration = 0.5;

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
	&.cancelledBurger {
		.bread-ham-cheese {
			width: 100%;
			&:before {
				transform: rotate(0deg);
				width: 45%;
			}
			&:after {
				transform: rotate(0deg);
				width: 75%;
			}
		}
	}
	&.transitionBurger {
		.bread-ham-cheese {
			width: 0%;
			border-top: 0 solid black;
			&:before,
			&:after {
				transform: rotate(0deg);
				transition: ${duration}s;
			}
		}
	}
	&.activeBurger {
		.bread-ham-cheese {
			width: 100%;
			border-top: 0 solid black;
			transition: border 0s;
			&:before,
			&:after {
				transition: ${duration}s;
				width: 100%;
				top: 0;
				bottom: 0;
				border-color: white;
			}
			&:before {
				transform: rotate(45deg);
			}
			&:after {
				transform: rotate(-45deg);
			}
		}
		&.hovering {
			.bread-ham-cheese {
				width: 100%;
				opacity: 0.8;
				transform: scale(0.8);
				transition: 0.25s;
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
	&:focus {
		outline: none;
	}
`;
