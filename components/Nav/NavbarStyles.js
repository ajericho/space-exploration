import styled from 'styled-components'

export const NavBarStyles = styled.div`
    display:flex;
    margin-left:50px;
    margin-top:50px;
    justify-content:space-between;
    align-items:center;
    
    @media (max-width: ${props => props.theme.device.tablet}) {
        margin-top:0;
        position:relative;

        }       
        @media (max-width: ${props => props.theme.device.mobile}) {
        position:absolute;
        right:0;
        left:auto;
        align-items:flex-start;
        }     


    .image-container {
        flex:shrink;
        min-width:120px;
        @media (max-width: ${props => props.theme.device.tablet}) {
            position:fixed;
            left:30px;
            top:30px;

        }
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
    @media (max-width: ${props => props.theme.device.mobile}) {
            height:100vh;
            width:350px;
            justify-content:flex-start;
            align-items:flex-start;
            padding-top:20px;
            z-index:20;
            position:absolute;
            display:${props => props.show === true ? '' : 'none' };
            right:0;
            left:auto;


        }    

`

export const ToggleButton = styled.div`
    display:none;
    
    @media (max-width: ${props => props.theme.device.mobile}) {
        display:block;
        text-align:right;
        position: absolute;
        right:30px;
        top:30px;
        z-index:30;

            button {
                background-color:transparent;
                border:0;
                box-shadow:none;
                display:fixed;
                right:0;
                left:auto;

                :hover {
                    cursor:pointer;
                }

            }

            button.show {
                display:block;
            }
            button.hide {
                display:none;
            }
        }    

`