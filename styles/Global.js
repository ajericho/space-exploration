import { createGlobalStyle } from 'styled-components'

import imgDesktop from '../assets/home/background-home-desktop.jpg'

const img = `url('${imgDesktop}')`;

export const GlobalStyles = createGlobalStyle` 
    html,
    body {
        background-color: #0B0D17;
        background-image:${img};
        color:#fff;
        padding: 0;
        margin: 0;
        font-family: 'Barlow Condensed', sans-serif;

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
     box-sizing: border-box;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
}

//Fonts 

    h1 {
        font-family: 'Bellefair', serif;
        font-size:150px;
        text-transform:uppercase;
        font-weight:400;
    }

    h2 {
        font-family: 'Bellefair', serif;
        font-size:100px;
        text-transform:uppercase;
        font-weight:400;
    }

    h3 {
        font-family: 'Bellefair', serif;
        font-size:56px;
        text-transform:uppercase;
        font-weight:400;
    }

    h4 {
        font-family: 'Bellefair', serif;
        font-size: 32px;
        text-transform:uppercase;
        font-weight:400;
    }

    h5 {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 28px;
        letter-spacing:4.75px;
        text-transform:uppercase;
        font-weight:400;
    }

    .sub-heading-a {
        font-family: 'Bellefair', serif;
        font-size:28px;
        text-transform:uppercase;
        font-weight:400;
    }

    .sub-heading-b {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 14px;    
        letter-spacing:2.35;
        text-transform:uppercase;
        font-weight:400;
    }

    .nav-text {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 16px;    
        letter-spacing:2.7;  
        text-transform:uppercase;
        font-weight:400;
    }

    
`
