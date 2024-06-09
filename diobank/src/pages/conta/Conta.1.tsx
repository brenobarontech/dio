import { useState, useEffect } from "react";
import { api } from "../../api";
import { UserData } from "./conta";
import { Container, Row, Column, Box } from "./style";



export const Conta = () => {
    const [datauser, setData] = useState<null | UserData>([]);

    useEffect(() => {
        const getData = async () => {

            const data: any | UserData = await api;
            setData(data);

        };

        getData();
    }, []);
    return (<>

        <Container>

            <Row>
                {datauser.map(repos => <Column><Box> {repos?.nome}</Box></Column> /  > )}


            </Row>



        </Container>

    </>);
};
