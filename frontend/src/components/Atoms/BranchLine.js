import React, {Component} from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';

class BranchLine extends Component {

	render() { 
		const {
			direction
		} = this.props;
		return ( 
			<BranchLineDiv className={`branch ${direction}`} />
		);
	}
}

export default withApollo(BranchLine);

const BranchLineDiv = styled.div`
    grid-row-start: 1;
    width: 50%;
    height: 50px;
    margin-top: 70px;
    border: 1px solid black;
    &.left{
        justify-self: end;
        border-bottom: none;
        border-right: none;
    }
    &.right{
        justify-self: start;
        border-bottom: none;
        border-left: none;
    }
`;