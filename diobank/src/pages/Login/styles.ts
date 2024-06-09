import styled from "styled-components";


export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

    @media (max-width: 500px) {
        padding:20px;
      }
`


export const LoginContainer = styled.div`

    width: 100%;
    max-width: 420px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 10px;
    padding: 80px 30px;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    

   
`


export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`





export const Titulo = styled.p`
    width:100%;
    color:#000;
    font-size:50px;
    text-align:center;
   
`

export const Espacamento = styled.div`
    margin: 10px 0;
`