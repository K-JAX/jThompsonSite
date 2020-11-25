import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';

class TripleArrow extends Component {
    state = {  }

    render() { 
        const { 
            isHovered,
            alignment
        } = this.props;

        return ( 
            <ArrowBox className={` ${alignment}  ${isHovered ? ' hovering' : ''}`} >
                <div className="arrow one" ></div>
                <div className="arrow two" ></div>
                <div className="arrow three" ></div>
            </ArrowBox>
         );
    }
}
 
export default TripleArrow;

const ArrowBox = styled.div`
    width: 50px;
    /* height: 100%; */
    opacity: 0.45;
    transition: 0.25s;
    .arrow{
        display: inline-block;
        width: 15px;
        height: 15px;
        border: 1px solid white;
        border-top: none;
        border-left: none;
        transition: margin 0.25s;
        transform: rotate(-45deg);
        &.one{
            opacity: 0.25;
        }
        &.two{
            opacity: 0.5;
        }
        &.three{

        }
    }
    &.hovering{
        opacity: 1;
        
    }

    &.left{
        .arrow{
            margin-left: -12px;
            transform: rotate(135deg);
            float: right;
        }
        &.hovering{
            .arrow{
                margin-left: 0;
            }
        }
    }
    
    &.right{
        .arrow{
            margin-right: -12px;
            transform: rotate(-45deg);
        }
        &.hovering{
            .arrow{
                margin-right: 0;
            }
        }
    }
    
`