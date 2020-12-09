import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './Organisms/Header';
import Footer from './Molecules/Footer';
import Home from './Templates/Home';
import Search from './Search';
import Page from './Page';
import Portfolio from './Templates/Portfolio';
import ProjectType from './Templates/Project-Type';
import ProjectSingle from './Templates/Project-Single';
import About from './Templates/About';
import Contact from './Templates/Contact';
import Post from './Post';
import Category from './Category';
import styled from 'styled-components';

export default (props) => {
  const [loaded, setLoad] = useState(0);
  const location = useLocation();

  let isHome;
  if ( location.pathname === '/'){
    isHome = true;
  }
  
  useEffect(() => {
    const timer = setTimeout(() => { setLoad(true) }, 750);
    return () => clearTimeout(timer);
  })

  return(
    <BodyContainer className={`center ${ loaded ? 'loaded' : ''}`}>
      <Header location={location} isHome={isHome} />
      <PageContainerElement className={` ${isHome ? '' : 'offset-header'}`}>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/page/portfolio" component={Portfolio} loaded={loaded} />
          <Route exact path="/page/about" component={About} />
          <Route exact path="/page/contact" component={Contact} />
          <Route exact path="/portfolio/:slug" component={ProjectType} />
          <Route exact path="/portfolio/:taxonomy/:slug" component={ProjectSingle} />
          <Route exact path="/page/:slug" component={Page} />
          <Route exact path="/post/:slug" component={Post} />
          <Route exact path="/category/:slug" component={Category} />
        </Switch>
      </PageContainerElement>
      <Footer isHome={isHome} />
    </BodyContainer>
)};

const BodyContainer = styled.div`
  display: grid;
`

const PageContainerElement = styled.div`
  margin-bottom: 100px;
  &.offset-header{
    margin-top: 175px;
  }
`