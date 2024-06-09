import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 100vh;
    display:flex;
    align-items:start;
    justify-content:center;
    padding : 30px 30px;
    

`


export const Titulo = styled.p`
width:100%;
color:#000;
font-size:50px;
text-align:center;

`


export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`


export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0 40px;
   
`


export const Box = styled.div`

    width: 100%;
    max-width: 420px;
    background-color: red;
    border-radius: 10px;
    padding: 80px 30px;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    

   
`