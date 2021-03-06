import React from "react";
import styled from "styled-components";

// Components
import { GiantLetters } from "../Molecules/GiantLetters";
import { EntryTitle } from "../Molecules/EntryTitle";
import { TransitionWipeLayers } from "../Molecules/TransitionWipeLayers";

const Intro = (props) => {
	// console.log(props.location.pathname);
	const { status, location, message } = props;
	return (
		<PageDiv status={status}>
			<GiantLetters layout="svg" letters="JTA" />
			<EntryTitle message={message} location={location} />
			<TransitionWipeLayers status={status} />
		</PageDiv>
	);
};
export default Intro;

const PageDiv = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-content: center;
	background: white;
	${(props) =>
		(props.status === "entering" || props.status === "entered") &&
		`z-index: 10;`}
	${(props) =>
		(props.status === "exiting" || props.status === "exited") &&
		`z-index: 10;`}
`;
