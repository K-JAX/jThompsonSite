import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useQuery } from "react-apollo";

import { SITE_SETTINGS_QUERY } from "../../Functional/queries";

// Components
import { GiantLetters } from "../Molecules/GiantLetters";
import { EntryTitle } from "../Molecules/EntryTitle";
import { TransitionWipeLayers } from "../Molecules/TransitionWipeLayers";

const Intro = (props) => {
	// console.log(props.location.pathname);
	const { loading, error, data } = useQuery(SITE_SETTINGS_QUERY);

	if (data === undefined) return <p></p>;

	console.log(data.faviconUrl);

	const { status, location, message } = props;
	return (
		<PageDiv status={status}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{`${
					data.generalSettings.title
				} ${" - Coming soon!"}`}</title>
				<link rel="canonical" href="https://jThompsonArchitect.com" />
				<link rel="icon" type="image/png" href={data.faviconUrl} />
			</Helmet>
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
