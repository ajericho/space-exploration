import styled from 'styled-components'


export const TechnologyContainer = styled.div`
  display: flex;
  align-items:center;
  flex-wrap:wrap;

  div {
     flex:4;
  }

  .controls {
     flex:1;
     max-width:130px;
     @media (max-width: ${props => props.theme.device.tablet}) {
         max-width: 100%;
         margin-top:400px;
        }
  }

  @media (max-width: ${props => props.theme.device.tablet}) {
         flex-direction:column;

        }

         
`  

export const TechImage = styled.div`
   height:515px;
   width:527px;
   position:absolute;
   right:0;
   top:230px;
   left:auto;
   bottom:auto;
   z-index:100;

   @media (max-width: ${props => props.theme.device.tablet}) {
        min-height:310px;
        width:100%;
        top:0;
        display:absolute;
        overflow:hidden;
        }
         
`   

export const TechDetails = styled.div`
   max-width:500px;
   margin-top:100px;
   h3 {
      margin:20px 0;
   }
    h4 {
      opacity:.5;
      margin-bottom:20px;
    }

    @media (max-width: ${props => props.theme.device.tablet}) {
        margin-top:0;
        }

`   