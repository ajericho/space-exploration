import styled from 'styled-components'

export const HomeHero = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    height:100%;
    margin-bottom:0;
    margin-top:auto;

    .greeting {
        max-width:432px;
        @media (max-width: ${props => props.theme.device.tablet}) {
            margin:auto;
            }
    }

    .explore {
        margin-bottom:35px;
        display:flex;
        justify-content:flex-end;
        align-items:flex-end;

        @media (max-width: ${props => props.theme.device.tablet}) {
            justify-content:center;
            align-items:flex-end;
            text-align:center;
            min-width:100%;
            height:100%;

            }
    }

    div {
        flex:1;
    }

    @media (max-width: ${props => props.theme.device.tablet}) {
            flex-direction:column;
            text-align:center;
            height:calc(100vh - 102px);
            padding-top:5vh;
            padding-bottom:5vh;
        }

`

