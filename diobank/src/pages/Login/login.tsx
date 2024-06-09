/* eslint-disable no-mixed-operators */
import { useState, useEffect } from "react"
import { Button } from "../../componentes/Button/Button";
import { useNavigate} from "react-router-dom";

//import { Input } from "../../componentes/Input/input"
import {LoginContainer ,Column,Titulo, Container, Espacamento,} from "./styles"
import { Input } from "../../componentes/Input/input";
import { api } from "../../api";
// eslint-disable-next-line @typescript-eslint/no-unused-vars


interface UserData{
    email :string
    senha :string
    nome :string
    id :string
}


export  const Login = () =>{

    

        const [email , setEmail] = useState('');
        const [senha , setSenha] = useState('');
        const [datauser, setData] = useState<null | UserData>();

        useEffect(() =>
        {
            const getData = async () => {
            
                const data: any | UserData =  await api;
                setData(data);
            
            };

            getData();
        }, []);
      

        const navigate = useNavigate();    

        const logar = () =>
        {
           
           
            if(datauser?.email === email && datauser?.senha === senha)
                
            {
                // eslint-disable-next-line react-hooks/rules-of-hooks
    
                navigate(`/conta/${datauser.id}`)
                
                console.log('Seja bem vindo' + datauser.nome)


                
            }else{

                console.log('Login invalido')
            }
        }

        return ( 
            <Container> 

                {datauser === null || datauser === undefined ? 
                    ( <>
                        
                        <Titulo>Carregando...</Titulo>
                    </>

                    
                    ) : 

                    (
                        <>
                            <LoginContainer>
                                <Column> 
                                    <Titulo>Login</Titulo>
                                    <Espacamento />

                                    <Column>
                                        <Input placeholder="E-mail" onChange={(event) => setEmail(event.target.value)}/>
                                        <Espacamento />
                                        <Input placeholder="Senha" onChange={(event) => setSenha(event.target.value)} type="password"/>                        
                                    </Column>
                                    <Espacamento />
                                    <Button title='Entrar' type="submit" onClick={logar}></Button>
                                </Column>   
                            </LoginContainer>
                        
                        </>
                    )
                
        
                }

            </Container>
    )
}