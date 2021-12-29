import React, { useEffect } from "react";
import { motion } from "framer-motion";
import * as easings from "d3-ease";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";
import styled from "styled-components";

const SVGLetter = (props) => {
	const { letter, size, alignment } = props;

	let dashArraySize = size * 5.9;
	let xPos = {
		start: alignment === "left" ? 10 : 80,
		end: alignment === "left" ? 12 : 78,
	};

	return (
		<VisibilitySensor>
			{({ isVisible }) => (
				<LetterSVG
					viewBox={`0 0 ${size * 2} 80`}
					height={`100%`}
					letterSize={size}
				>
					<motion.text
						initial={{
							strokeDashoffset: 0,
							x: `${xPos.start}%`,
							fill: "rgba(70, 72, 83, 0.01)",
							stroke: "rgba(161,211,255, 0)",
						}}
						animate={{
							strokeDashoffset: isVisible ? 100 : dashArraySize,
							x: `${isVisible ? xPos.end : xPos.start}%`,
							fill: isVisible
								? "rgba(70, 72, 83, 0.5)"
								: "rgba(70, 72, 83, 0.01e)",
							stroke: isVisible
								? "rgba(161,211,255, 1)"
								: "rgba(161,211,255, 0)",
						}}
						transition={{
							duration: 3,
						}}
						strokeDasharray={`${dashArraySize} ${dashArraySize}`}
						fontSize={size}
						y={size / 1.85}
						strokeWidth={2}
						fill={`rgba(70, 72, 83, 0.5)`}
						fontWeight={`bold`}
						stroke={`rgba(161,211,255, 1)`}
						textAnchor={`${alignment === "left" ? "start" : "end"}`}
					>
						{letter}
					</motion.text>
				</LetterSVG>
			)}
		</VisibilitySensor>
	);
};
export default SVGLetter;

SVGLetter.defaultProps = {
	size: 152,
};

SVGLetter.propTypes = {
	letter: PropTypes.string,
	size: PropTypes.number,
};

const LetterSVG = styled.svg`
	position: relative;
	width: 100%;
`;
