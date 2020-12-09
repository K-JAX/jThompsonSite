import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';


class StatBox extends Component {
    state = {  }

    
    render() { 
        const { 
            materials, 
            styles,
            colors
        } = this.props;
        return ( 
            <StatBoxDiv className="project-stats box">
                <dl>
                    <dt>Material</dt>
                    <dd>
                        <ul>{materials}</ul>
                    </dd>
                    <dt>Style</dt>
                    <dd>
                        <ul>{styles}</ul>
                    </dd>
                    <dt className="color-term">Palette</dt>
                    <dd className="color-defintion">
                        <ul>{colors}</ul>
                    </dd>
                </dl>
            </StatBoxDiv>
         );
    }
}
 
export default withApollo(StatBox);


const StatBoxDiv = styled.div`
    grid-column-start: 1;
    grid-column-start: 1;
    &.project-stats{
        position: relative;
        max-width: 316px;
        background: linear-gradient(180deg, rgba(226,223,223,1) 0%, rgba(245,242,241,1) 100%);
        box-shadow: 5px 5px 100px -25px rgba(0,0,0,0.25);
        dl{
            display: grid;
            grid-template-columns: 30% auto;
            grid-row-gap: 30px;
            margin: 0;
            dt{
            grid-column-start: 1;
            font-weight: bold;
            &.color-term{
                grid-column-end: 3;
            }
            }
            dd{
            grid-column-start: 2;
            font-style: italic;
            &.color-defintion{
                grid-column-start: 1;
                grid-column-end: 3;
                margin-left: 0;
            }
            }
        }
        }
        ul{
            margin: 0;
            padding: 0;
            li{
                list-style: none;
                margin: 0;
            }
        }
        .color-swatch{
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-left: 10px;
        border-radius: 100%;
        box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.35);
        &:first-of-type{
            margin-left: 0;
        }
        }
    }
`;