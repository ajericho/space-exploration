import styled from 'styled-components'

export const SliderTabs = styled.div`
      margin-top:120px;

      h4 {
         margin:0;
      }

      .slider-dot {
            height:80px;
            width:80px;
            border-radius:50%;
            background-color:transparent;
            margin-bottom:30px;
            border:1px solid rgba(255,255,255,.25);
            display:block;
            transition:ease-in-out .2s all;
            color:#fff;

            @media (max-width: ${props => props.theme.device.tablet}) {         
               display:inline-block;
               margin:10px 20px;

        }
         }

         .slider-dot.active {
            background-color:#fff;
            border:1px solid rgba(255,255,255,1);
            color:#0B0D17;
         }


         .slider-dot:hover{
            border:1px solid rgba(255,255,255,1);
            cursor:pointer;
         }
         
         @media (max-width: ${props => props.theme.device.tablet}) {
            display:flex;
            margin-top:0;
   

        }
`
