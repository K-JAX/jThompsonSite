import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';

class CaptionTitle extends Component {
    state = {  }

    render() { 
        const {children} = this.props;
        return ( 
            <Cap>{children}</Cap>
         );
    }
}
 
export default withApollo(CaptionTitle);


const Cap = styled.h3`
    display: inline-block;
    background-color: rgba(255,255,255,0.75);
    margin: 0;
    font-size: 2.15rem;
    text-decoration: none;
    color: black;
    font-weight: 100;
    padding: 10px 5px;
`