import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSpring, animated, config } from "react-spring";
import { Spring } from "react-spring/renderprops";
import { easeQuadInOut } from "d3-ease";

const interp = (i) => (r) =>
	`translate3d(${
		140 * Math.sin(r + (i * 2 * Math.PI) / 1.6)
	}%, 0, 0) scale(1.125)`;

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

		const gProps = useSpring({
			from: { transform: "translateX(-100%)" },
			to: { transform: "translateX(0%)" },
			config: { tension: 80, friction: 30, precision: 0.001 },
		});

		const { radians } = useSpring({
			from: { radians: 0 },
			to: async (next) => {
				while (1) await next({ radians: 2 * Math.PI });
			},
			config: { duration: 45000, precision: 0.001 },
			delay: 700,
			reset: true,
		});

		return (
			<GiantLettersSVG
				width="100%"
				height="100vh"
				viewBox="0 0 1000 1000"
				className="svg"
				layout={layout}
			>
				<animated.g id="main-bg" style={gProps}>
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
				</animated.g>
				<animated.g
					className="distant-bg regular"
					style={{ transform: radians.interpolate(interp(10)) }}
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
				</animated.g>
				<animated.g
					id=""
					className="distant-bg backwards"
					style={{ transform: radians.interpolate(interp(-10)) }}
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
				</animated.g>
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
		/* animation: squishIn ease 2.55s; */
		text {
		}
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
		text {
			/* transform: translateX(100%) translateY(-7%) scale(1.125); */
			&:first-of-type {
				animation-delay: 0s;
			}
			&:nth-of-type(2) {
				animation-delay: 2.5s;
			}
			&:last-of-type {
				animation-delay: 4s;
			}
		}
		&.regular {
			/* animation: rollOverlay ease 20.55s infinite alternate; */
		}
		&.backwards {
			/* animation: rollOverlay ease 20.55s infinite reverse; */
		}
	}
	@keyframes squishIn {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes rollOverlay {
		0% {
			transform: translateX(200%) scale(1.15) translateZ(0);
		}
		100% {
			transform: translateX(-400%) scale(1.15) translateZ(0);
		}
	}
`;

const GiantLettersDiv = styled.div`
	position: absolute;
	font-size: ${(props) => (props.height === "full" ? "100vh" : "2250px")};
	font-family: "Hind Siliguri", sans-serif;
	z-index: ${(props) => props.zIndex};
	&.cascading {
		display: flex;
		/* left: -0.0245em; */
		/* right: 0; */
		/* top: -41%; */
		top: 0;
		margin: auto;
		margin-left: -0.045em;
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
