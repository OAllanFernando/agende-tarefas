import React from "react";
import * as Style from "./styles";

const Input = ({ type, placeholder, value, onChange}) =>{
    return(
        <Style.Input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />  
    )
}
export default Input;