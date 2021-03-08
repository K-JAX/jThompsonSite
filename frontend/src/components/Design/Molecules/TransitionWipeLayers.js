import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
// import { Trail, animated } from "react-spring/renderprops";

export const TransitionWipeLayers = (props) => {
	const [items, setItems] = useState([1, 2, 3]);

	// useEffect(() => {
	// 	setItems([1, 2, 3]);
	// });

	const layerTransitions = useTransition(items, (item) => item, {
		from: {
			transform: "translateX(0%)",
			// left: "50%",
		},
		enter: {
			transform: "translateX(-105%)",
			// left: "-100%",
		},
		leave: {
			transform: "translateX(0%)",
			// left: "0%",
		},
		trail: 260,
		config: { tension: 300, friction: 70 },
	});

	const { className, from, status } = props;
	return (
		<TransitionDiv
			status={status}
			from={props}
			className={`${className} ${status} ${from}`}
		>
			{/* <Trail
				native
				initital={null}
				items={items}
				from={{ x: 100 }}
				to={{ x: -100 }}
			>
				{(item) => ({ x }) => (
					<animated.div
						className={`transition-screen layer-${item}`}
						style={{
							transform: x.interpolate(
								(x) => `translate3d(${x}%,0,0)`
							),
						}}
					/>
				)}
			</Trail> */}

			<>
				{items !== [] &&
					layerTransitions.map(({ item, key, props }, i) => (
						<animated.div
							key={`layer-${i}`}
							className={`transition-screen layer-${i + 1}`}
							style={props}
						/>
					))}
			</>
			{/* <div className="transition-screen layer-1"></div> */}
			{/* <div className="transition-screen layer-2"></div>
			<div className="transition-screen layer-3"></div> */}
		</TransitionDiv>
	);
};

const TransitionDiv = styled.div`
	position: absolute;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	/* animation: underlay 0s 3.25s ease forwards; */
	&.exited,
	&.exiting {
		/* animation: underlay 0s 0s ease reverse forwards !important; */
	}
	${(props) =>
		(props.status === "exiting" || props.status === "exited") &&
		`animation: underlay 0s 0s ease reverse forwards !important;`}
	.transition-screen {
		position: absolute;
		width: 100%;
		height: 100%;
		/* transform: translateX(0); */
		will-change: transform;
		/* animation: wipeLeft 0.85s ease forwards; */
		&.layer-3 {
			z-index: 1;
			background-color: #d9d3d0;
			/* animation-delay: 0.1s; */
		}
		&.layer-2 {
			z-index: 2;
			background-color: #464853;
			/* animation-delay: 0.25s; */
		}
		&.layer-1 {
			z-index: 3;
			background-color: white;
			/* animation-delay: 0.4s; */
		}
	}
	&.intro.entered .transition-screen,
	&.intro.entering .transition-screen {
		transform: translateX(0);
		/* animation: wipeRight 0.85s ease forwards; */
		&.layer-3 {
			background-color: #464853;
			/* animation-delay: 0.4s; */
		}
		&.layer-2 {
			background-color: #e3e2dd;
			/* animation-delay: 0.55s; */
		}
		&.layer-1 {
			background-color: #f9f3f0;
			/* animation-delay: 0.7s; */
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
