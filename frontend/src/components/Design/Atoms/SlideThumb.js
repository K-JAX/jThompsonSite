import React, { useContext } from "react";
import styled from "styled-components";

// components
import { SlideshowContext } from "../Organisms/Slideshow";

export const SlideThumb = (props) => {
	const { active, visible, onItemClick, num, image } = props;
	const propFunction = () => {
		onItemClick(num);
	};

	return (
		<SlideButton
			className={`${active} ${visible} thumb`}
			onClick={propFunction}
		>
			<div
				className="bg-thumb"
				style={{
					backgroundImage: `url(${image.sourceUrl})`,
				}}
			/>
		</SlideButton>
	);
};

export default SlideThumb;

const SlideButton = styled.button`
	width: 0;
	opacity: 0;
	height: 70px;
	border: solid black;
	border-width: 2px;
	background: white;
	display: inline-block;
	padding: 0;
	&:hover {
		opacity: 1 !important;
	}
	&:not(.active) {
		transform: scale(0.8);
	}
	transition: 0.95s;
	&.visible {
		width: 100px;
		opacity: 0.75;
		margin: 0 0.75em;
		border-width: 0;
		&.active {
			opacity: 1;
		}
		@media all and (max-width: 768px) {
			width: 60px;
			height: 35px;
			margin: 0 0.35em;
		}
	}
	.bg-thumb {
		width: 100%;
		height: 100%;
		background-size: cover;
	}
`;
