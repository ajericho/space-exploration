import styled from 'styled-components'

export const HorizontalListStyle = styled.nav`
    ul {
        list-style:none;
        margin-left:0;
        margin-top:0;
        margin-bottom:0;
        padding-left:0;
        height:100%;
    }

    li {
        display:inline-block;
    }

    a {
        padding:40px 0;
        margin:0 25px;

        border-bottom:3px solid transparent;
        transition:ease-in-out .2s border-bottom;
        display:inline-block;
    }

    a:hover {
        border-bottom:3px solid #979797;
        cursor:pointer;
    }

    a.active {
        border-bottom:3px solid #fff; 
    }

    span.number {
        margin-right:.6em;
        font-weight:700;
    }
`
