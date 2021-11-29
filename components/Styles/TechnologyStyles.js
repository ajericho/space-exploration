import styled from 'styled-components'

export const CrewTabs = styled.div`
      margin-top:20px;

      .slider-dot {
            height:80px;
            width:80px;
            border-radius:50%;
            background-color:transparent;
            margin-bottom:30px;
            border:1px solid rgba(255,255,255,.25);
            display:block;
            transition:ease-in-out .2s all;
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
`

export const TechnologyContainer = styled.div`
  display: flex;
  align-items:top;

  div {
     flex:5;
  }

  .controls {
     flex:1;
     width:100px;
  }

         
`  

export const CrewImage = styled.div`
    display:block;

         
`   

export const CrewDetails = styled.div`
   h3 {
      margin:20px 0;
   }
    h4 {
      opacity:.5;
      margin-bottom:20px;
    }



`   