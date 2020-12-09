import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo.png';
import styled from 'styled-components';

const Logo = (props) => {
  const {isHome} = props;
  return(
    <Link to="/" className="no-underline black">
      <LogoElement src={logo} alt="logo" className={`${isHome ? 'home-logo' : 'normal-logo'}`}/>
    </Link>
  )
};
export default Logo;

const LogoElement = styled.img`
  max-width: 100%;
  transition: 0.125s;
  &.home-logo{
    width: 215px;
    margin-top: 50px;
  }
  &.normal-logo{
    width: 184px;
    margin-top: 0;
    padding: 33px 30px;
    background-color: rgba(227, 224, 224,0.85);
  }
`