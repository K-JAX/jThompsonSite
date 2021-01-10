import React from "react-dom";
import styled from "styled-components";

const GiantLetter = (props) => {
	return <GiantLetterSpan>{props.children}</GiantLetterSpan>;
};

export default GiantLetter;

const GiantLetterSpan = styled.span`
	font-size: 100vh;
`;
