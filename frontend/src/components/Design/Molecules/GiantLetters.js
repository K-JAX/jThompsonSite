import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const GiantLetters = (props) => {
	const { letters, layout, height, zIndex } = props;
	let separated = letters.split("");

	if (layout === "cascade")
		return (
			<GiantLettersDiv
				className="cascading"
				letters={separated}
				layout={layout}
				zIndex={zIndex}
			>
				{separated.map((letter, i) => {
					return (
						<span key={letter} className={`letter letter-${i}`}>
							{letter}
						</span>
					);
				})}
			</GiantLettersDiv>
		);
	if (layout === "svg") {
		let letterPositions = [-251, 142, 507];
		return (
			<GiantLettersSVG
				width="100%"
				height="100%"
				viewBox="0 0 1000 1000"
				className="svg"
				layout={layout}
			>
				<motion.g
					id="main-bg"
					initial={{ x: `-100%` }}
					animate={{ x: 0 }}
					transition={{
						type: "Inertia",
						duration: 0.85,
					}}
				>
					{separated.map((letter, i) => {
						return (
							<text
								key={letter}
								className={`letter-${i}`}
								x={letterPositions[i]}
								y="100%"
							>
								{letter}
							</text>
						);
					})}
				</motion.g>
				<motion.g
					className="distant-bg regular"
					initial={{ x: -1500, scale: 1.1 }}
					animate={{ x: 2000 }}
					transition={{
						type: "tween",
						repeat: Infinity,
						duration: 15,
					}}
				>
					{separated.map((letter, i) => {
						return (
							<text
								key={letter}
								className={`letter-${i}`}
								x={letterPositions[i]}
								y="100%"
							>
								{letter}
							</text>
						);
					})}
				</motion.g>
				<motion.g
					className="distant-bg backwards"
					initial={{ x: 2000, scale: 1.1 }}
					animate={{ x: -1500 }}
					transition={{
						type: "tween",
						repeat: Infinity,
						duration: 15,
					}}
				>
					{separated.map((letter, i) => {
						return (
							<text
								key={letter}
								className={`letter-${i}`}
								x={letterPositions[i]}
								y="100%"
							>
								{letter}
							</text>
						);
					})}
				</motion.g>
			</GiantLettersSVG>
		);
	}
	return (
		<GiantLettersDiv className="normal" layout={layout}>
			{props.letters}
		</GiantLettersDiv>
	);
};

GiantLetters.propTypes = {
	letters: PropTypes.string,
	layout: PropTypes.string,
	height: PropTypes.string,
	zIndex: PropTypes.number,
};

const GiantLettersSVG = styled.svg`
	position: absolute;
	font-family: "Hind Siliguri";
	/* z-index: 0; */
	user-select: none;
	top: 0;
	text {
		font-size: 83em;
	}
	#main-bg {
		.letter-0 {
			opacity: 0.3;
		}
		.letter-1 {
			opacity: 0.1;
		}
		.letter-2 {
			opacity: 0.14;
		}
	}
	.distant-bg {
		opacity: 0.0225;
		transform-origin: 50% 50%;
	}
`;

const GiantLettersDiv = styled.div`
	position: absolute;
	font-size: ${(props) => (props.height === "full" ? "100%" : "2250px")};
	font-family: "Hind Siliguri", sans-serif;
	z-index: ${(props) => props.zIndex};
	&.cascading {
		display: flex;
		/* left: -0.0245em; */
		/* right: 0; */
		/* top: -41%; */
		top: 0;
		margin: auto;
		margin-left: -0.0575em;
		user-select: none;
		.letter {
			width: 0.15em;
			line-height: 0.725;
			&:first-of-type {
				color: #464853;
				opacity: 0.3;
			}
			&:nth-of-type(2) {
				color: #464853;
				opacity: 0.1;
				margin-top: 0.27em;
			}
			&:last-of-type {
				color: #464853;
				opacity: 0.15;
				margin-top: 0.4em;
			}
		}
	}
`;

/* ${(props) =>
	props.letters.map(
		(letter, i) => `
	&:nth-of-type( ${i + 1} ){
		margin-top: ${i * 20}0px;
	}
`
	)} */
