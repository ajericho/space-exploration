import styled from 'styled-components'

export const MainButton = styled.button`
    height:274px;
    width:274px;
    border-radius:50%;
    border:0;
    font-family: 'Bellefair', serif;
    font-size:32px;
    text-transform:uppercase;
    background-color:#fff;
    letter-spacing:2px;
    box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.1);
    transition:linear .2s box-shadow;
    
    :hover, :focus {
        cursor:pointer;
        -webkit-box-shadow: 0px 0px 0px 85px rgba(255,255,255,0.1); 
        box-shadow: 0px 0px 0px 85px rgba(255,255,255,0.1);
    }

`
