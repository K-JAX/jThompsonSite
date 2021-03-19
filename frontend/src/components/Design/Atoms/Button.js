import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = (props) => {
	const { children, onClick, priority, className, hover, id } = props;

	return (
		<StyledButton
			id={id}
			className={`${priority} ${className} ${hover}`}
			onClick={onClick}
		>
			<span>{children}</span>
		</StyledButton>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	internal: PropTypes.bool,
	priority: PropTypes.string,
	hover: PropTypes.string,
};

Button.defaultProps = {
	children: "See now",
	internal: true,
	priority: "tertiary",
	hover: "top",
};

const StyledButton = styled.button`
	padding: 0.8em 2.8em;
	font-variant: small-caps;
	font-weight: 500;
	position: relative;
	& > span {
		position: relative;
		z-index: 1;
		transition: 0.25s;
		display: inline-block;
	}
	&:before,
	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		transition: 0.25s;
	}
	&:after {
		transition-delay: 0s;
	}
	// direction
	&.top,
	&.bottom {
		&:before,
		&:after {
			width: 100%;
			height: 0;
			left: 0;
		}
	}
	&.top:before,
	&.top:after {
		bottom: 0;
	}
	&.bottom:before,
	&.bottom:after {
		top: 0;
	}
	&.left,
	&.right {
		&:before,
		&:after {
			width: 0;
			height: 100%;
			top: 0;
		}
	}
	&.left:before,
	&.left:after {
		right: 0;
	}
	&.right:before,
	&.right:after {
		left: 0;
	}
	// priority
	&.secondary {
		background: black;
		color: white;
	}
	&.tertiary {
		background: transparent;
		&:before {
			background: gray;
		}
		&:after {
			background: #464853;
		}
		&:hover {
			color: white;
			&:after {
				transition-delay: 0.25s;
			}
		}
	}
	&.circular {
		border: none;
		background: transparent;
		transition: 0.125s;
		&:hover {
			opacity: 0.9;
			span {
				transform: translateY(-2px) !important;
			}
		}
		&:active {
			transform: scale(0.95);
		}
		& > span {
			display: flex;
			margin: auto;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			border-radius: 400px;
			outline: none;
			color: #464853;
			border: 1px solid;
			width: 150px;
			height: 150px;
			padding: 0;
			background-color: rgba(255, 255, 255, 0.55);
			transition: 0.25s;
			cursor: pointer;
			span {
				/* margin-top: 1em; */
			}
		}
	}
	&:hover {
		&.bottom,
		&.top {
			&:before,
			&:after {
				height: 100%;
			}
		}
		&.bottom span {
			transform: translateY(3px);
		}
		&.top span {
			transform: translateY(-3px);
		}
		&.left,
		&.right {
			&:before,
			&:after {
				width: 100%;
			}
		}
		&.left span {
			transform: translateX(3px);
		}
		&.right span {
			transform: translateX(-3px);
		}
	}
`;
