import styled from 'styled-components'

export const PlanetTabs = styled.div`

margin-bottom:40px;


a {
   padding:10px 0;
   margin:0 25px 0 0;
   border-bottom:3px solid transparent;
   transition:ease-in-out .2s border-bottom;
   display:inline-block;
   transition:ease-in-out .2s all;
}

a:hover {
   border-bottom:3px solid #979797;
   cursor:pointer;
}

a.active {
   border-bottom:3px solid #fff; 
}

`

export const PlanetStats = styled.div`
    border-top:1px solid rgba(255,255,255,.25);
    margin:45px 0 0 0;
    display:flex;


    .white {
        color:#fff;
    }
    @media (max-width: ${props => props.theme.device.tablet}) {
      text-align:center;

        }
    
`   
