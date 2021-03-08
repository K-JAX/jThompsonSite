import React from "react";
import styled from "styled-components";
import ReactBreakpoints from "react-breakpoints";
import { useQuery } from "react-apollo";
import { Media } from "react-breakpoints";

import Intro from "./Design/Templates/Intro";
import { Routing } from "../components/Functional/Routing";
import { SITE_STATUS_QUERY } from "./Functional/queries";

export default ({ in: inProp }) => {
	const { loading, error, data } = useQuery(SITE_STATUS_QUERY);

	if (loading) return loading;
	if (error) return error;

	if (data.siteStatus !== "") return <Intro message={data.siteStatus} />;

	let isHome = location.pathname === "/" && true;

	const breakpoints = {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	};

	return (
		<BodyContainer className={`center position-relative`}>
			<ReactBreakpoints breakpoints={breakpoints}>
				{/* {(visitedCookie || !isHome) && (
					<Header location={location} isHome={isHome} />
				)} */}
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
				{/* {(visitedCookie || !isHome) && <Footer isHome={isHome} />} */}
			</ReactBreakpoints>
		</BodyContainer>
	);
	// }
};

const BodyContainer = styled.div`
	/* display: grid; */
	.page-container-element {
		@media all and (max-width: 767px) {
			margin-top: 80px;
		}
		&.offset-right {
			padding-right: 80px;
			@media all and (max-width: 767px) {
				padding-right: 0;
			}
		}
	}
`;
