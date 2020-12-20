import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';

// Components
import CaptionTitle from '../Atoms/CaptionTitle';
import CaptionLink from '../Atoms/CaptionLink';

class CaptionBox extends Component {
	render() { 
		const { 
			isHovered, 
			alignment, 
			children, 
			link, 
			linkText, 
			linkAlt 
		} = this.props;
		
		
		return(
			<Box className={alignment === 'left' ? 'left' : 'right'}>
				{alignment === 'left' ? (
					<InnerBox className={isHovered ? 'hovering' : 'nothovered'}>
						<CaptionLink className='link-box' isHovered={isHovered} link={link} alignment={alignment} linkAlt={linkAlt}>{linkText}</CaptionLink>
						<CaptionTitle>{children}</CaptionTitle>
					</InnerBox>
				) : (
					<InnerBox className={isHovered ? 'hovering' : 'nothovered'}>
						<CaptionTitle>{children}</CaptionTitle>
						<CaptionLink alignment="right" className="link-box" isHovered={isHovered} link={link} linkAlt={linkAlt}>{linkText}</CaptionLink>
					</InnerBox>
				)}
			</Box>
		);
	};
}
 
export default withApollo(CaptionBox);

const Box = styled.figcaption`
	height: 50px;
	align-self: end;
	&.left{
		justify-self: start;
	}
	&.right{
		justify-self: end;
	}
`

const InnerBox = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	.link-box{
		background-color: black;
	}
`