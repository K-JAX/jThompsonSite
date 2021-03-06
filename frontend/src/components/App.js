import React, { useState, useEffect } from "react";
import { Switch, Router, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import ReactBreakpoints from "react-breakpoints";
import { useQuery } from "react-apollo";
import { Media } from "react-breakpoints";
import {
	TransitionGroup,
	SwitchTransition,
	Transition,
	CSSTransition,
} from "react-transition-group";

// Components
import Header from "./Design/Organisms/Header";
import Footer from "./Design/Molecules/Footer";
import Intro from "./Design/Templates/Intro";
// const Home = React.lazy(() => import("./Design/Templates/Home"));
import Home from "./Design/Templates/Home";
import Portfolio from "./Design/Templates/Portfolio";
import ProjectType from "./Design/Templates/Project-Type";
import ProjectSingle from "./Design/Templates/Project-Single";
import About from "./Design/Templates/About";
import PressArticles from "./Design/Templates/PressArticles";
import { PressArticleSingle } from "./Design/Templates/PressArticle-Single";
import Contact from "./Design/Templates/Contact";
import Page from "./Design/Templates/Page";
import Post from "./Design/Templates/Post";
import { NotFound } from "./Design/Templates/404";
import Search from "./Design/Templates/Search";
import Category from "./Design/Templates/Category";
import Headline from "./Design/Atoms/Headline";

import { SITE_STATUS_QUERY } from "./Functional/queries";

export default ({ in: inProp }) => {
	const [loaded, setLoad] = useState(0);
	const location = useLocation();
	const [status, setStatus] = useState("Running");

	let isHome;
	if (location.pathname === "/") {
		isHome = true;
	}

	const breakpoints = {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoad(true);
		}, 750);
		return () => clearTimeout(timer);
	});

	const { pathname, key } = location;

	function getCookie(name) {
		var dc = document.cookie;
		var prefix = name + "=";
		var begin = dc.indexOf("; " + prefix);
		if (begin == -1) {
			begin = dc.indexOf(prefix);
			if (begin != 0) return null;
		} else {
			begin += 2;
			var end = document.cookie.indexOf(";", begin);
			if (end == -1) {
				end = dc.length;
			}
		}
		// because unescape has been deprecated, replaced with decodeURI
		//return unescape(dc.substring(begin + prefix.length, end));
		return decodeURI(dc.substring(begin + prefix.length, end));
	}

	const { loading, error, data } = useQuery(SITE_STATUS_QUERY);

	if (loading) return null;
	if (error) return `Error! ${error}`;

	if (!data.siteStatus !== "") return <Intro message={data.siteStatus} />;

	function delete_cookie(name, path, domain) {
		if (getCookie(name)) {
			document.cookie =
				name +
				"=" +
				(path ? ";path=" + path : "") +
				(domain ? ";domain=" + domain : "") +
				";expires=Thu, 01 Jan 1970 00:00:01 GMT";
		}
	}
	var visitedCookie = getCookie("visited");
	delete_cookie("visited");
	var date = new Date();

	if (pathname !== "/") {
		document.cookie =
			"visited=true; expires=" + date.setDate(date.getDate() + 1);
	}

	let HomeRoute =
		visitedCookie === null || visitedCookie === undefined
			? { path: "/", component: Intro }
			: { path: "/", component: Home };

	const routes = [
		HomeRoute,
		{ path: "/about", component: About },
		{ path: "/press_article", component: PressArticles },
		{ path: "/press_article/:slug", component: PressArticleSingle },
		{ path: "/contact", component: Contact },
		{ path: "/portfolio", component: Portfolio },
		{ path: "/portfolio/:slug", component: ProjectSingle },
		{ path: "/page/:slug", component: Page },
		{ path: "/post/:slug", component: Post },
		{ path: "/category/:slug", component: Category },
		{ path: "/search", component: Search },
		{ path: "/*", component: NotFound },
	];

	return (
		<BodyContainer
			className={`center ${loaded && "loaded"} position-relative`}
		>
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
							<PageContainerElement
								className={` ${offsetCondition}`}
							>
								<TransitionGroup component={null}>
									<Transition
										key={key}
										unmountOnExit
										classNames="page-route"
										timeout={3000}
									>
										{(status) => (
											<Switch location={location}>
												{routes.map((route, i) => (
													<Route
														exact
														key={route.path}
														path={route.path}
														render={(rest) => (
															<div
																className={`page page-route-${status} ${
																	route.path !==
																		"/" &&
																	"offset-header"
																}`}
															>
																<route.component
																	{...rest}
																	status={
																		status
																	}
																/>
															</div>
														)}
													/>
												))}
											</Switch>
										)}
									</Transition>
								</TransitionGroup>
							</PageContainerElement>
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
	/* display: grid; */
`;

const PageContainerElement = styled.div`
	@media all and (max-width: 767px) {
		margin-top: 80px;
	}
	&.offset-right {
		padding-right: 80px;
		@media all and (max-width: 767px) {
			padding-right: 0;
		}
	}
`;
