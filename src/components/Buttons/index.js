import React from "react";
import * as Style from "./styles";

const Button = ({ Text, onClick, Type = "button" }) => {
    return(
        <Style.Button onClick={onClick} type={Type}>
            {Text}
        </Style.Button>
    )
}

export default Button;