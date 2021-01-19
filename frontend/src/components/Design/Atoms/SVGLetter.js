import React, { useEffect } from "react";
import { Spring } from "react-spring/renderprops";
import * as easings from "d3-ease";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SVGLetter = (props) => {
	const { letter, size, alignment } = props;

	let dashArraySize = size * 5.9;

	return (
		<VisibilitySensor>
			{({ isVisible }) => (
				<Spring
					from={{
						dOffset: dashArraySize,
						leftX: 10,
						rightX: 80,
						fillOpacity: 0,
						fillColorR: 0,
						fillColorG: 0,
						fillColorB: 0,
						strokeOpacity: 1,
					}}
					to={{
						dOffset: isVisible ? 0 : dashArraySize,
						fillOpacity: isVisible ? 0.125 : 0,
						leftX: 12,
						rightX: 78,
						fillColorR: 70,
						fillColorG: 72,
						fillColorB: 83,
						strokeOpacity: isVisible ? 0.125 : 0.5,
					}}
					config={{
						duration: 4000,
						easing: easings.easeCubic,
					}}
				>
					{(props) => (
						<LetterSVG
							viewBox={`0 0 ${size * 2} 80`}
							height={`100%`}
							letterSize={size}
						>
							<text
								strokeDasharray={`${dashArraySize} ${dashArraySize}`}
								strokeDashoffset={props.dOffset}
								fontSize={size}
								x={`${
									alignment === "left"
										? props.leftX
										: props.rightX
								}%`}
								y={size / 1.85}
								style={{ transform: `translateX(${props.x})` }}
								strokeWidth={2}
								fontWeight={`bold`}
								stroke={`rgba(161,211,255, ${props.strokeOpacity})`}
								fill={`rgba(${props.fillColorR},${props.fillColorG},${props.fillColorB},${props.fillOpacity})`}
								textAnchor={`${
									alignment === "left" ? "start" : "end"
								}`}
							>
								{letter}
							</text>
						</LetterSVG>
					)}
				</Spring>
			)}
		</VisibilitySensor>
	);
};

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
