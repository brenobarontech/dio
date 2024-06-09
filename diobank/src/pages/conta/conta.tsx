import { api } from "../../api";
import { useState, useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom";
import { Box, Column, Container, Row, Titulo } from "./style"
import { useContext } from "react"
import { AppContext } from "../../componentes/AppContext"

interface UserData{
    email :string;
    senha :string;
    nome :string;
    id: string;
   
}


export const Conta = () =>{


    const navigate = useNavigate();    
    const [datauser, setData] = useState<null | UserData>();

    const {id} = useParams();
    
    const {logado} = useContext(AppContext)
    
    !logado && navigate('/')

    useEffect(() =>
    {
        const getData = async () => {
        
            const data: any | UserData =  await api;
            setData(data);
        
        };

        getData();
    }, []);

  
    
  
    
    return(<>        
        <Container>    
            
            {datauser === null || datauser === undefined ? 
                ( <>
                    
                    <Titulo>Carregando...</Titulo>


                </>

                
                ) : 

                (
                    <>
                        
                        {id !== datauser?.id ? (

                            navigate('/')

                        ) : (
                            <Row>
                                <Column>                                   
                                    <Box> {datauser?.nome}</Box>                                
                            
                                </Column>
                                
                                <Column>                                   
                                    <Box> {datauser?.nome} </Box>                                
                            
                                </Column>
                                
                                <Column>                                   
                                    <Box> {datauser?.nome}</Box>                                
                            
                                </Column>
                                
                                

                            </Row>
                        )}

                    </>
                )
            
    
            }


        </Container>
        
        
           
     



       
       
    </>)
}