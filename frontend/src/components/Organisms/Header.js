import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { compose } from 'recompose';
import styled from 'styled-components';

// Components
import Logo from '../Atoms/Logo';
import SidebarMenu from '../Molecules/SidebarMenu';
import PulloutMenu from '../Molecules/PulloutMenu';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      mobileMenuActive: null,
    } 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      mobileMenuActive: state.mobileMenuActive ===  null || state.mobileMenuActive ===  false ? true : false
    }))
  }
  
  render() {
    const {mobileMenuActive} = this.state;
    const {isHome} = this.props;
    
    return (
      <HeaderElement id="site-header" className={`${isHome ? 'home' : 'normal'} flex pa1 justify-between  `} >
        <div className="flex flex-fixed black">
          <Logo isHome={isHome} />
          { isHome ? <SidebarMenu /> : <PulloutMenu burgerOnClick={this.handleClick} menuActive={mobileMenuActive} /> }
        </div>
      </HeaderElement>
    );
  }
}

export default compose(
  // withRouter,
  withApollo,
)(Header);


const HeaderElement = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  &.home{
    float: left;
    width: 277px;
    height: 100%;
    .flex{
      flex-direction: column;
    }
  }
  &.normal{
    width: 100%;
    height: 178px;
    padding: 0;
    .flex{
      width: 100%;
      flex-direction: row;
    }    
  }
`
