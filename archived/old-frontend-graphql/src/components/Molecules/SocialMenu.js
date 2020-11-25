import React, { Component } from 'react';
// import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

// components
import SocialIcon from  '../Atoms/SocialIcon';

class SocialMenu extends Component {
    state = {  }

    render() { 
        return ( 
            <SocialNavElem className="social-nav">
                <SocialIcon icon="facebook" link="https://www.facebook.com/DeGrawDeHaan" />
                <SocialIcon icon="instagram" link="https://www.instagram.com/degrawanddehaan/" />
                <SocialIcon icon="houzz" link="https://www.houzz.com/professionals/architects-and-building-designers/degraw-and-dehaan-architects-pfvwus-pf~1325422072?" />
            </SocialNavElem>
         );
    }
}
export default SocialMenu;


const SocialNavElem = styled.nav`
    .social-link{
        margin: 0 7px;
        .social-icon{
            svg{
                g.social-svg-mask{
                    fill: rgb(17, 46, 58) !important;
                }
            }
        }
        &:first-of-type{
            margin-left:0;
        }
    }
`