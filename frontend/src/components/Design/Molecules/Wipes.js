import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";

export const Wipes = (props) => {
	const [z, setZ] = useState(11);
	const { className, from, enter, leave, delay } = props;
	let { status, startColor, endColor } = props;
	const [items, setItems] = useState([1, 2, 3]);
	const [color, setColor] = useState(startColor);

	// setItems([1, 2, 3]);
	// setColor(startColor);

	// useEffect(() => {
	// 	// 	// if (status === "entered" || status === "entering") {
	// 	// 	setItems([1, 2, 3]);
	// 	// 	setColor(startColor);
	// 	// 	// if (status === "exited" || status === "exiting") {
	// 	// 	// 	setItems([]);
	// 	// 	// 	setColor(endColor);
	// 	// 	// }
	// }, []);

	const layerTransitions = useTransition(items, (item) => item, {
		from: {
			transform: `translateX(${from}%)`,
		},
		enter: () => async (next) => {
			await new Promise((resolve) => setTimeout(resolve, delay));
			await next({ transform: `translateX(${enter}%)` });
			await setZ(-1);
		},
		leave: () => async (next) => {
			await setZ(11);
			await next({ transform: `translateX(${leave}%)` });
			await new Promise((resolve) => setTimeout(resolve, 7000));
			await setZ(-1);
		},
		trail: 160,
		config: { tension: 300, friction: 50 },
	});

	return (
		<TransitionDiv
			status={status}
			from={props}
			className={`${className} ${color} ${status} ${from}`}
			style={{ zIndex: z }}
		>
			{items !== [] &&
				layerTransitions.map(
					({ item, key, props }, i) =>
						item && (
							<animated.div
								key={key}
								className={`transition-screen layer-${i + 1}`}
								style={props}
							/>
						)
				)}
		</TransitionDiv>
	);
};

const TransitionDiv = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	.transition-screen {
		position: absolute;
		width: 100%;
		height: 100%;
		will-change: auto;
		transform: translateX(0);
	}
	&.entered,
	&.entering {
		.layer-1 {
			z-index: 3;
		}
		.layer-2 {
			z-index: 2;
		}
		.layer-3 {
			z-index: 1;
		}
		&.dark {
			.layer-1 {
				background-color: #464853;
			}
			.layer-2 {
				background-color: #e3e2dd;
			}
			.layer-3 {
				background-color: white;
			}
		}
		&.light {
			.layer-1 {
				background-color: white;
			}
			.layer-2 {
				background-color: #464853;
			}
			.layer-3 {
				background-color: #d9d3d0;
			}
		}
	}
	&.exited,
	&.exiting {
		animation: underlay 0s 0s ease reverse forwards !important;
		.layer-1 {
			z-index: 1;
		}
		.layer-2 {
			z-index: 2;
		}
		.layer-3 {
			z-index: 3;
		}
		&.dark {
			.layer-1 {
				background-color: white;
			}
			.layer-2 {
				background-color: #e3e2dd;
			}
			.layer-3 {
				background-color: #464853;
			}
		}
		&.light {
			.layer-1 {
				background-color: #d9d3d0;
			}
			.layer-2 {
				background-color: #464853;
			}
			.layer-3 {
				background-color: white;
			}
		}
	}
`;

Wipes.propTypes = {
	from: PropTypes.number,
	enter: PropTypes.number,
	leave: PropTypes.number,
	delay: PropTypes.number,
	startColor: PropTypes.string,
	endColor: PropTypes.string,
	status: PropTypes.string,
};

Wipes.defaultProps = {
	from: 0,
	enter: -105,
	leave: 105,
	delay: 0,
	startColor: "dark",
	endColor: "dark",
};
