import React, { useEffect } from "react";
import styled from "styled-components";
import ReactBreakpoints, { Media } from "react-breakpoints";
import { useQuery } from "react-apollo";
import { useLocation } from "react-router-dom";

// components
// import Intro from "./Design/Templates/Intro";
const Intro = React.lazy(() => import("./Design/Templates/Intro"));

// import Header from "./Design/Organisms/Header";
const Header = React.lazy(() => import("./Design/Organisms/Header"));

// import Footer from "./Design/Molecules/Footer";
const Footer = React.lazy(() => import("./Design/Molecules/Footer"));

// import Routing from "../components/Functional/Routing";
const Routing = React.lazy(() => import("../components/Functional/Routing"));

import { SITE_STATUS_QUERY } from "./Functional/queries";
import { getCookie } from "./Functional/StoreCookies";

export default ({ in: inProp }) => {
	const { loading, error, data } = useQuery(SITE_STATUS_QUERY);

	const location = useLocation();

	if (loading) return loading;
	if (error) return error;

	if (data.siteStatus !== "") return <Intro message={data.siteStatus} />;

	let isHome = location.pathname === "/" && true;
	let visitedCookie = getCookie("visited");

	const breakpoints = {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	};

	return (
		<BodyContainer
			className={`center position-relative ${
				visitedCookie || !isHome ? "pb-5" : ""
			}`}
		>
			<ReactBreakpoints breakpoints={breakpoints}>
				{(visitedCookie || location.pathname !== "/") && (
					<Header location={location} isHome={isHome} />
				)}
				<Media>
					{({ breakpoints, currentBreakpoint }) => {
						let offsetCondition =
							(!isHome ||
								breakpoints[currentBreakpoint] <
									breakpoints.xl) &&
							"offset-right";
						return (
							<div
								className={`page-container-element ${offsetCondition}`}
							>
								<Routing />
							</div>
						);
					}}
				</Media>
				{(visitedCookie || !isHome) && <Footer isHome={isHome} />}
			</ReactBreakpoints>
		</BodyContainer>
	);
	// }
};

const BodyContainer = styled.div`
	min-height: 100vh;
	/* padding-bottom: 5em; */
	.page-container-element {
		@media all and (max-width: 767px) {
			/* margin-top: 80px; */
		}
		&.offset-right {
			padding-right: 80px;
			@media all and (max-width: 767px) {
				padding-right: 0;
			}
		}
	}
`;
