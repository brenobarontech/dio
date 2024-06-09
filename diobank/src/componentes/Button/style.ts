import styled from "styled-components";

export const ButtonContainer =  styled.button`
    width: 100%; 
    max-width:170px;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    font-size:20px;
    padding:15px;
    border-radius:8px;
    text-transform:uppercase;

    &:hover  {
        opacity: 0.7;
        cursor:pointer;
        border: 1;
    }
`