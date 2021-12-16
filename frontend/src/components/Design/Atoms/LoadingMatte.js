import React from "react";
import styled from "styled-components";

const LoadingMatte = () => {
	return <LoadingMatteDiv />;
};
export default LoadingMatte;
const LoadingMatteDiv = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	background: #464853;
	color: white;
`;
