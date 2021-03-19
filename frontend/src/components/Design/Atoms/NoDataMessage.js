import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const NoDataMessage = (props) => {
	const { text, className } = props;
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	});

	return (
		<StyledDiv className={` ${className} ${loaded && "loaded"} `}>
			<p>{text}</p>
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	position: relative;
	font-size: 2em;
	font-family: "Hind Siliguri";
	color: #ccc;
	user-select: none;
	width: 100%;
	height: 100%;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	text-align: center;
	opacity: 0.25;
	transition: 0.35s;
	p {
		transform: translateY(50px) rotateX(45deg);
		transition: 0.35s;
	}
	&.loaded {
		opacity: 1;
		p {
			transform: translateY(0px) rotateX(0deg);
		}
	}
`;
