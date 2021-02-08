import React, { useState, useEffect } from "react";
import { Switch, Router, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import ReactBreakpoints from "react-breakpoints";
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

const routes = [
	{ path: "/", component: Home },
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

export default ({ in: inProp }) => {
	const [loaded, setLoad] = useState(0);
	const location = useLocation();

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

	return (
		<BodyContainer
			className={`center ${loaded && "loaded"} position-relative`}
		>
			<ReactBreakpoints breakpoints={breakpoints}>
				<Header location={location} isHome={isHome} />
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
								{/* <Headline
									text="Press"
									alignment="left"
									status={"entering"}
								/> */}
								<TransitionGroup component={null}>
									<Transition
										key={key}
										appear={true}
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
				<Footer isHome={isHome} />
			</ReactBreakpoints>
		</BodyContainer>
	);
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
