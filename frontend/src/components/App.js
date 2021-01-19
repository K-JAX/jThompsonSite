import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import ReactBreakpoints from "react-breakpoints";
import { Media } from "react-breakpoints";
import {
	TransitionGroup,
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

	return (
		<BodyContainer className={`center ${loaded ? "loaded" : ""}`}>
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
								className={` ${
									!isHome && "offset-header"
								} ${offsetCondition}`}
							>
								<TransitionGroup>
									<CSSTransition
										key={location.key}
										timeout={3000}
										unmountOnExit
										in={inProp}
									>
										<Switch location={location}>
											<Route
												exact
												path="/"
												component={Home}
											/>
											<Route
												exact
												path="/search"
												component={Search}
											/>
											<Route
												exact
												path="/portfolio"
												component={Portfolio}
												loaded={loaded}
											/>
											<Route
												exact
												path="/about"
												component={About}
											/>
											<Route
												exact
												path="/press_article"
												component={PressArticles}
											/>
											<Route
												exact
												path="/press_article/:slug"
												component={PressArticleSingle}
											/>
											<Route
												exact
												path="/contact"
												component={Contact}
											/>
											<Route
												exact
												path="/portfolio/:slug"
												component={ProjectSingle}
											/>
											<Route
												exact
												path="/page/:slug"
												component={Page}
											/>
											<Route
												exact
												path="/post/:slug"
												component={Post}
											/>
											<Route
												exact
												path="/category/:slug"
												component={Category}
											/>
											<Route component={NotFound} />
										</Switch>
									</CSSTransition>
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
	/* margin-bottom: 100px; */
	&.offset-header {
		margin-top: 158px;
		@media all and (max-width: 767px) {
			margin-top: 80px;
		}
	}
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
