import styled from 'styled-components'

export const NavBarStyles = styled.div`
    display:flex;
    margin-left:50px;
    margin-top:50px;
    justify-content:space-between;
    align-items:center;

    .line {
        height:1px;
        background-color:#979797;
        opacity:.25;
        width:35%;
        margin-right:-10%;
        z-index:1;
    }


`
export const GlassContainer = styled.div`
    background-color:rgba(255,255,255,.04);
    backdrop-filter: blur(30px);
    height:100%;
    min-width: 830px;
    display:flex;
    justify-content:center;
    align-items:center;

`
