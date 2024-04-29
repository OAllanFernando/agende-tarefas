// styles.js

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Header = styled.div`
    padding: 20px;
    background-color: 
    #b0c2ff
    ;
    display: flex;
    justify-content: space-between;
`;

export const Body = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px;
`;

export const BodyHeader = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-between;
`;

export const Footer = styled.div`
    padding: 20px;
    background-color: #f0f0f0;
`;

export const Content = styled.div`
    gap: 10px;
    box-shadow: 0 1px 2px #0003;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #00000;
`;

export const LabelMinor = styled.label`
    font-size: 15px;
    font-weight: italic;
    color: #00000;
`;

export const LabelSingUp = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: #676767;
    text-align: center;
`;

export const LabelError = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: red;
`;

export const LabelSucess = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: green;
`;

export const Strong = styled.strong`
    cursor: pointer;
    a {
        text-decoration: none;
        color: #676767;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

export const TableCell = styled.td`
    padding: 8px;
    border: 1px solid #dddddd;
    text-align: left;
`;

export const TableButtonCell = styled.td`
    padding: 8px;
    border: 1px solid #dddddd;
    text-align: center;
`;

export const Button = styled.button`
    padding: 6px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

export const ButtonNewTask = styled.button`
    padding: 9px 10px;
    border: none;
    background-color: #006e30;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`