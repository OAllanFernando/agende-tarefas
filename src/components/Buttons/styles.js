import styled from "styled-components";

export const Button = styled.button`
    outline: none;
    padding: 16px 20px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #125c25;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover{
        background-color: #e5e5e5;
    }
    color: white;
    max-width: 350px;
    font-weight: 600;
`;