import styled from 'styled-components'

export const CrewTabs = styled.div`
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
`

export const CrewImage = styled.div`
    display:block;

         
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



`   