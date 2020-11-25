import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';


class Hero extends Component {
    state = {  }

    render() {
        const {
            captionTitle,
            date,
            location,
            img
        } = this.props;
        return ( 
            <HeroSection className="hero-section" style={{backgroundImage: `url(${img})`}}>
                <div className="project-title">
                    <h1>{captionTitle}</h1>
                    <h2>{date}, <i>{location}</i></h2>
                </div>
            </HeroSection>
         );
    }
}
 
export default withApollo(Hero);

const HeroSection = styled.section`
    display: grid;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    &.hero-section{
        /* override whatever grid properties inherited */
        grid-template-columns: 100%;
    }
    .project-title{
        display: grid;
        min-width: 500px;
        padding: 0px 0;
        padding-right: 10rem;
        text-align: center;
        background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.75) 50%);
        align-self: start;
        justify-self: end;
        justify-content: end;
        h1, h2 {
            display: inline-block;
        }
        h1{
            position: relative;
            margin: 1rem 0;
            font-size: 46px;
            font-weight: 100;
            :after{
                content: '';
                position: absolute;
                width: 100%;
                height: 1px;
                background: black;
                left: 0;
                bottom: -1rem;
                opacity: 0.4;
            }
        }
        h2{
            opacity: 0.6;
            font-family: "Cardo", serif;
            font-weight: 100;
        }
    }  
`;