import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Design/Organisms/Header";
import Footer from "./Design/Molecules/Footer";
import Home from "./Design/Templates/Home";
import Portfolio from "./Design/Templates/Portfolio";
import ProjectType from "./Design/Templates/Project-Type";
import ProjectSingle from "./Design/Templates/Project-Single";
import About from "./Design/Templates/About";
import Contact from "./Design/Templates/Contact";
import Page from "./Design/Templates/Page";
import Post from "./Design/Templates/Post";
import Search from "./Design/Templates/Search";
import Category from "./Design/Templates/Category";

export default () => {
	const [loaded, setLoad] = useState(0);
	const location = useLocation();

	let isHome;
	if (location.pathname === "/") {
		isHome = true;
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoad(true);
		}, 750);
		return () => clearTimeout(timer);
	});

	return (
		<BodyContainer className={`center ${loaded ? "loaded" : ""}`}>
			<Header location={location} isHome={isHome} />
			<PageContainerElement
				className={` ${isHome ? "" : "offset-header"}`}
			>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/search" component={Search} />
					<Route
						exact
						path="/portfolio"
						component={Portfolio}
						loaded={loaded}
					/>
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route
						exact
						path="/portfolio/:slug"
						component={ProjectSingle}
					/>
					<Route exact path="/page/:slug" component={Page} />
					<Route exact path="/post/:slug" component={Post} />
					<Route exact path="/category/:slug" component={Category} />
				</Switch>
			</PageContainerElement>
			<Footer isHome={isHome} />
		</BodyContainer>
	);
};

const BodyContainer = styled.div`
	display: grid;
`;

const PageContainerElement = styled.div`
	/* margin-bottom: 100px; */
	&.offset-header {
		margin-top: 175px;
	}
`;
