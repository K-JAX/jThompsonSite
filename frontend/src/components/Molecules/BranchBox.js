import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

class BranchBox extends Component {
    state = {  }

    render() { 
        const {
            title,
            content
        } = this.props;
        return ( 
            <BranchBoxDiv>
                <h3>{title}</h3>
                <hr />
                <Markdown>{content}</Markdown>
            </BranchBoxDiv>
         );
    }
}
 
export default withApollo(BranchBox);

const BranchBoxDiv = styled.div`
      align-self: start;
      grid-row-start: 2;
      grid-row-end: 2;
      justify-self: center;
      text-align: center;
      max-width: 70%;
      padding: 0px 58px 30px;
      border-top: 5px solid black;
      background: linear-gradient(180deg, rgba(226,223,223,1) 0%, rgba(245,242,241,1) 100%);
      box-shadow: 5px 5px 100px -25px rgba(0,0,0,0.25);
      line-height: 1.5;
      h3{
          margin-bottom: 1rem;
          font-family: "Cardo", serif;
          font-style: italic;
          font-size: 2.5rem;
          font-weight: 300;
      }
      hr{
          margin-bottom: 1.25rem;
      }
`