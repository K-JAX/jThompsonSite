import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

	return <GiantLettersDiv layout={layout}>{props.letters}</GiantLettersDiv>;
};

GiantLetters.propTypes = {
	letters: PropTypes.string,
	layout: PropTypes.string,
	height: PropTypes.string,
	zIndex: PropTypes.number,
};

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
