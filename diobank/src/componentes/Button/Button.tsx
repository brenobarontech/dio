import React from "react";
import { ButtonContainer } from "./style";
import { IButton} from "./types";

export const Button = ({ title, onClick } : IButton) => 
{
    return(<>

        <ButtonContainer onClick={onClick}>{title}</ButtonContainer>

    </>)

}

