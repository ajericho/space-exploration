import styled from 'styled-components'

export const NavBarStyles = styled.div`
    display:flex;
    margin-left:50px;
    margin-top:50px;
    justify-content:space-between;
    align-items:center;

    .image-container {
        flex:shrink;
        min-width:120px;
    }

    .line {
        height:1px;
        background-color:#979797;
        opacity:.25;
        flex:1;
        margin-right:-80px;
        z-index:1;

        @media (max-width: ${props => props.theme.device.tablet}) {
            display:none;

        }
    }

    @media (max-width: ${props => props.theme.device.tablet}) {
        margin-top:0;

        }


`
export const GlassContainer = styled.div`
    background-color:rgba(255,255,255,.04);
    backdrop-filter: blur(30px);
    height:100%;
    min-width: 830px;
    flex:flex-shrink;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: ${props => props.theme.device.tablet}) {
            min-width:auto;

        }

`
