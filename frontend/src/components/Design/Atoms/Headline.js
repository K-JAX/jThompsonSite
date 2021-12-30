import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

const Headline = (props) => {
	const { text, loaded, className, alignment, size } = props;
	let { status } = props;
	const [items, setItems] = useState([1, 2, 3]);
	const chars = text.split("");
	const letterAnim = useAnimation();
	const boxAnim = useAnimation();
	async function letterSeq() {
		await letterAnim.start({ y: 0, opacity: 1 });
		await letterAnim.start({ color: "#000" });
	}
	async function letterOutSeq() {
		await letterAnim.start({ y: 30, opacity: 0 });
	}
	async function boxSeq() {
		await boxAnim.start({ width: "100%", left: "0%", right: "100%" });
		await new Promise((resolve) => setTimeout(resolve, 500));
		await boxAnim.start({ width: "0%", left: "100%", right: "0%" });
	}
	useEffect(() => {
		if (status === "entered") {
			letterSeq();
			boxSeq();
		} else if (status === "exiting") {
			letterOutSeq();
		}
	}, [status]);

	if (status === "entering") return null;
	return (
		<HeadlineH1
			className={`page-heading ${className} ${size} ${status} ${
				loaded && "loaded"
			}`}
			alignment={alignment}
			size={size}
		>
			{chars.map((char, i) => {
				return (
					<motion.span
						key={`letter-${char}-${i}`}
						initial={{ y: 80, color: "#fff", opacity: 0 }}
						animate={letterAnim}
						transition={{
							type: "spring",
							stiffness: 100,
							duration: 0.25,
							delay: i / 20,
						}}
					>
						{char}
					</motion.span>
				);
			})}
			<div>
				{items !== [] &&
					items.map(({ item, key, props }, i) => (
						<motion.div
							key={`layer-${i}`}
							className={`box-transition layer-${i + 1} `}
							initial={{
								width: "0%",
								left: "0%",
								right: "100%",
							}}
							animate={boxAnim}
							transition={{
								type: "easeInOut",
								duration: 0.3,
								delay: i / 10,
							}}
						/>
					))}
			</div>
		</HeadlineH1>
	);
};

export default Headline;

const HeadlineH1 = styled.h1`
	position: relative;
	justify-self: end;
	font-weight: 100;
	height: auto;
	display: inline-block;
	margin: 0;
	white-space: nowrap;
	font-variant: small-caps;
	${(props) => (props.alignment === "right" ? "padding-right: 12rem;" : "")}
	@media all and (max-width: 767px) {
		${(props) => (props.alignment === "right" ? "padding-right: 0;" : "")}
	}
	&.large {
		font-size: 8.25rem;
		@media all and (max-width: 767px) {
			font-size: 4.25rem;
		}
	}
	&.small {
		font-size: 2.75rem;
	}
	&:before {
		content: "";
		position: absolute;
		width: 0;
		${(props) => (props.alignment === "left" ? " right: 0;" : "")}
		${(props) => (props.alignment === "right" ? " left: 0;" : "")}
		bottom: 0;
		border-bottom: 2px solid black;
		transition: 1s;
	}
	&.entered {
		&:before {
			width: 100vw;
			animation: drawIn 1s forwards;
		}
	}
	&.loaded {
	}

	span {
		display: inline-block;
	}
	.box-transition {
		position: absolute;
		z-index: -1;
		/* width: 100%; */
		height: 100%;
		left: 0;
		top: 0;
		&.layer-1 {
			background: #d9d3d0;
		}
		&.layer-2 {
			background: gray;
			/* transition-delay: 0.25s; */
		}
		&.layer-3 {
			background: #464853;
			/* transition-delay: 0.5s; */
		}
	}
	@keyframes drawIn {
		0% {
			width: 0;
		}
		100% {
			width: 100vw;
		}
	}
`;

Headline.propTypes = {
	text: PropTypes.string,
	size: PropTypes.string,
	loaded: PropTypes.bool,
	className: PropTypes.string,
	alignment: PropTypes.string,
};

Headline.defaultProps = {
	size: "large",
};
