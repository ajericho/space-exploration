import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle` 
    html,
    body {
        background-color: #0B0D17;
        color:#fff;
        padding: 0;
        margin: 0;
        font-family: 'Barlow', sans-serif;

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
        margin:0;
        @media (max-width: ${props => props.theme.device.mobile}) {
            font-size:80px;
        }
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
        font-weight:300;
        margin:20px 0px;
        color:${props => props.theme.colors.lilac};
        @media (max-width: ${props => props.theme.device.mobile}) {
            font-size:16px;

        }
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
        letter-spacing:2.35px;
        text-transform:uppercase;
        font-weight:400;

    }

    .nav-text {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 16px;    
        letter-spacing:2.7px;  
        text-transform:uppercase;
        font-weight:300;
    }

    p {
        font-family: 'Barlow', sans-serif;
        font-size:18px;
        color:${props => props.theme.colors.lilac};
        font-weight:300;
        line-height:1.9;   
    }

    
`
