import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = (props) => {
	const { children, onClick, priority, hover } = props;

	return (
		<StyledButton className={`${priority} ${hover}`} onClick={onClick}>
			<span>{children}</span>
		</StyledButton>
	);
};

Button.propTypes = {
	children: PropTypes.string,
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
