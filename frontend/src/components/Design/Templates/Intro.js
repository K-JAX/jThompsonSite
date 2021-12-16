import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useQuery } from "react-apollo";

// components
import GiantLetters from "../Molecules/GiantLetters";
import EntryTitle from "../Molecules/EntryTitle";
import Wipes from "../Molecules/Wipes";

// functions
import { SITE_SETTINGS_QUERY } from "../../Functional/queries";

const Intro = (props) => {
	const { loading, error, data } = useQuery(SITE_SETTINGS_QUERY);
	const { location, message } = props;
	let { status } = props;

	return (
		<PageDiv status={status}>
			{data !== undefined && (
				<Helmet>
					<meta charSet="utf-8" />
					<title>{`${
						data.generalSettings.title
					} ${" - Welcome"}`}</title>
					<link
						rel="canonical"
						href="https://jThompsonArchitect.com"
					/>
					<link rel="icon" type="image/png" href={data.faviconUrl} />
				</Helmet>
			)}
			<GiantLetters layout="svg" letters="JTA" />
			<EntryTitle message={message} location={location} />
			<Wipes
				startColor={"light"}
				from={0}
				enter={-105}
				leave={0}
				status={status}
			/>
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
		(props.status === "entering" ||
			props.status === "entered" ||
			props.status === "exited") &&
		`z-index: 10;`}/* ${(props) =>
		(props.status === "exiting" || props.status === "exited") &&
		`z-index: 10;`} */
`;
