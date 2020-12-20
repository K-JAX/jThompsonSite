import React, { Component } from 'react';
import styled from 'styled-components';
import {withApollo} from 'react-apollo';
import renderHTML from 'react-render-html';

class UserContentTree extends Component {
	render() { 
		const {
			content
		} = this.props;
		return ( 
			<UCTSection>
				{renderHTML(content)}
			</UCTSection>
		 );
	}
}
 
export default withApollo(UserContentTree);

const UCTSection = styled.section`
	display: grid;
	grid-column-start: 1;
	grid-column-end: 3;
	grid-template-columns: 50% 50%;
	.tree-trunk{
		position: relative;
		display: grid;
		grid-column-start: 1;
		grid-column-end: 3;
		grid-template-columns: 50% 50%;
		grid-template-rows: auto auto;
		padding: 100px 0;
		&:after{
			content: '';
			position: absolute;
			grid-column-start: 2;
			left: 0;
			top: 0;
			width: 1px;
			height: 100%;
			background: black;
		}
		.wp-block-group.box{
			padding: 0;
			.wp-block-group__inner-container{
				&>:not(figure){
					margin: 4rem;
				}
			}

		}
		.wp-block-image{
			margin: 0;
		}
		
	}
	
`;