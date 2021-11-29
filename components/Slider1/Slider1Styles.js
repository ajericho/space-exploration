import styled from 'styled-components'

export const SliderTabs = styled.div`
      margin-top:-150px;
      .slider-dot {
            height:15px;
            width:15px;
            border-radius:50%;
            background-color:#fff;
            opacity:.17;
            border:0;
            margin-right:20px;
            transition:ease-in-out .2s all;
         }

         .slider-dot.active {
            opacity:1;

         }


         .slider-dot:hover{
            opacity:.5;
            cursor:pointer;
         }
       @media (max-width: ${props => props.theme.device.tablet}) {
        margin-top:0px;
        }
`

export const CrewImage = styled.div`
    display:block;
    @media (max-width: ${props => props.theme.device.tablet}) {
        position:absolute;
        height:500px;
        width:450px;
        bottom:20px;

        }

      @media (max-width: ${props => props.theme.device.mobile}) {
        position:inherit;
        height:280px;
        width:331px;
      //  bottom:80px;
        order:1;

        }

`   

export const CrewDetails = styled.div`
   margin-top:-100px;
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
        @media (max-width: ${props => props.theme.device.mobile}) {
        order:2;
        }

`   