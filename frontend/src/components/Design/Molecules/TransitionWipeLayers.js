import React from "react";
import styled from "styled-components";

export const TransitionWipeLayers = (props) => {
	// console.log(props.status);

	const { className, from, status } = props;
	return (
		<TransitionDiv
			status={status}
			from={props}
			className={`${className} ${status} ${from}`}
		>
			<div className="transition-screen layer-1"></div>
			<div className="transition-screen layer-2"></div>
			<div className="transition-screen layer-3"></div>
		</TransitionDiv>
	);
};

const TransitionDiv = styled.div`
	position: absolute;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	animation: underlay 0s 3.25s ease forwards;
	&.exited,
	&.exiting {
		animation: underlay 0s 0s ease reverse forwards !important;
	}
	${(props) =>
		(props.status === "exiting" || props.status === "exited") &&
		`animation: underlay 0s 0s ease reverse forwards !important;`}
	.transition-screen {
		transform: translateX(0);
		animation: wipeLeft 0.85s ease forwards;
		&.layer-3 {
			background-color: white;
			animation-delay: 0.1s;
		}
		&.layer-2 {
			background-color: #464853;
			animation-delay: 0.25s;
		}
		&.layer-1 {
			background-color: #d9d3d0;
			animation-delay: 0.4s;
		}
	}
	&.intro.entered .transition-screen,
	&.intro.entering .transition-screen {
		transform: translateX(0);
		animation: wipeRight 0.85s ease forwards;
		&.layer-3 {
			background-color: #464853;
			animation-delay: 0.4s;
		}
		&.layer-2 {
			background-color: #e3e2dd;
			animation-delay: 0.55s;
		}
		&.layer-1 {
			background-color: #f9f3f0;
			animation-delay: 0.7s;
		}
	}
	&.exited .transition-screen,
	&.exiting .transition-screen {
		animation: wipeOut 0.85s ease forwards;
		transform: translateX(-100%);
		&.layer-3 {
			background-color: #464853;
			animation-delay: 0.4s;
		}
		&.layer-2 {
			background-color: #e3e2dd;
			animation-delay: 0.25s;
		}
		&.layer-1 {
			background-color: #f9f3f0;
			animation-delay: 0.1s;
		}
	}
	.transition-screen {
		position: absolute;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: translateX(0);
	}
	.layer-3 {
	}
	.layer-2 {
	}
	.layer-1 {
	}
	@keyframes wipeLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
	@keyframes wipeRight {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100%);
		}
	}
	@keyframes underlay {
		0% {
			z-index: 1;
		}
		100% {
			z-index: -1;
		}
	}

	@keyframes wipeOut {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}
`;
