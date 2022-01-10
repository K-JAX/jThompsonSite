import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Wipes = (props) => {
	const [items, setItems] = useState([]);
	const [color, setColor] = useState("");
	const [z, setZ] = useState(11);
	const { className, from, enter, leave, delay } = props;
	let { status, startColor, endColor } = props;

	useEffect(() => {
		if (status === "entered") {
			setItems([1, 2, 3]);
			setColor(startColor);
			wipeSeq();
		} else if (status === "exiting") {
			setColor(endColor);
			wipeOutSeq();
		}
	}, [status]);

	async function wipeSeq() {
		await setZ(11);
		await new Promise((resolve) => setTimeout(resolve, delay * 300 + 800));
		await setZ(-1);
	}
	async function wipeOutSeq() {
		await setZ(11);
		await setItems([]);
	}

	return (
		<TransitionDiv
			status={status}
			className={`${className} ${color} ${status} ${from}`}
			style={{ zIndex: z }}
		>
			<AnimatePresence>
				{items !== [] &&
					items.map(({ item }, i) => (
						<motion.div
							key={`item-${i}`}
							className={`transition-screen layer-${i + 1}`}
							initial={{
								x: `${from}%`,
							}}
							animate={{
								x: `${enter}%`,
							}}
							exit={{
								x: `${leave}%`,
							}}
							transition={{
								type: "spring",
								damping: 30,
								stiffness: 120,
								delay: i / 20 + delay,
							}}
						/>
					))}
			</AnimatePresence>
		</TransitionDiv>
	);
};
export default Wipes;

const TransitionDiv = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	.transition-screen {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
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
	className: "",
	startColor: "dark",
	endColor: "dark",
	status: "entering",
};
