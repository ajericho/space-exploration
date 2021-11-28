import styled from 'styled-components'



export const Wrapper = styled.main` 
    position:fixed;
    width:100vw;
    height:100vh;
    overflow:scroll;
    z-index:1;

    @media (max-width: ${props => props.theme.device.tablet}) {
        height:calc(100vh);

        }
    
`

export const Layout = styled.div`
    max-width:1150px;
    height:70%;
    margin:auto;
    padding:0 25px;

`
export const PageContent = styled.div`
   display:flex;

   div {
       flex:1;
   }

`
