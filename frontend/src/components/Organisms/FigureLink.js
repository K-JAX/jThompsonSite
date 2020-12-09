import React, { Component } from 'react';
import {withApollo} from 'react-apollo';
import styled from 'styled-components';

// Components
import CaptionBox from '../Molecules/CaptionBox';

class FigureLink extends Component {
    state = { 
        isHovered: false
     }

     addHover = (event) => {
        this.setState({
            isHovered: true
        })
     }
     
     removeHover = (event) => {
        this.setState({
            isHovered: false
        })
     }
     
    render() { 
        const { isHovered } = this.state;
        const { 
            alignment, 
            captionTitle,
            img 
        } = this.props


        return ( 
            <Figure className={ alignment === 'left' ? 'left' : 'right'} onMouseEnter={() => this.addHover()} onMouseLeave={() => this.removeHover()} onFocus={() => this.addHover()} >
                <div className="background-category-cover" style={{backgroundImage: `url(${img})`}} >
                    <CaptionBox isHovered={ isHovered } alignment={alignment} link="#" linkText="View" >{captionTitle}</CaptionBox>
                </div>
            </Figure>
         );
    }
}
 
export default withApollo(FigureLink);


const Figure = styled.figure`
    height: 100%;
    margin: 0;
    padding: 0;
    min-height: 300px;
    .background-category-cover{
        display: grid;
        width: 100%;
        height: 100%;
        background-size: cover
        background-position: center;
    }
`