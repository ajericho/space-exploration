import styled from 'styled-components'

export const HorizontalListStyle = styled.nav`
    ul {
        list-style:none;
        margin-left:0;
        margin-top:0;
        margin-bottom:0;
        padding-left:0;
        height:100%;
        @media (max-width: ${props => props.theme.device.mobile}) {
            padding-top:40px;
        }     
    }

    li {
        display:inline-block;
        @media (max-width: ${props => props.theme.device.mobile}) {
            display:block;
            text-align:left;
        }   
    }

    a {
        padding:40px 0;
        margin:0 25px;
        border-bottom:3px solid transparent;
        transition:ease-in-out .2s border-bottom;
        display:inline-block;
        @media (max-width: ${props => props.theme.device.mobile}) {
            padding:20px 0;
        }  

    }

    a:hover {
        border-bottom:3px solid #979797;
        cursor:pointer;
        @media (max-width: ${props => props.theme.device.mobile}) {
            border-bottom:3px solid transparent;
        }  
    }

    a.active {
        border-bottom:3px solid #fff; 
        @media (max-width: ${props => props.theme.device.mobile}) {
            border-bottom:3px solid transparent;
        }  
    }

    span.number {
        margin-right:.6em;
        font-weight:700;
    }
`

