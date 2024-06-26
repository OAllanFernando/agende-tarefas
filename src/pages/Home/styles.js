// styles.js

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Define uma altura mínima de 100vh */
`;

export const ChartContainer = styled.div`
    width: calc(50% - 5px); 
    margin-right: 10px; s
    display: inline-block; 
`;

export const Header = styled.div`
    padding: 20px;
    background-color: #0866FF;
    display: flex;
    justify-content: space-between;
`;

export const Body = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px;
`;

export const BodyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const BodyHeaderLeft = styled.div`
   
    display: flex;
    justify-content: left;
    width: 100%;
`;


export const BodyHeaderTag = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
`;

export const TagsSpace = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    margin-bottom: 10px;
`;

export const Footer = styled.div`
    padding: 20px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
`;

export const Content = styled.div`
    gap: 10px;
    box-shadow: 0 1px 2px #0003;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #00000;
`;
export const LabelHeader = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
`;

export const LabelMinor = styled.label`
    font-size: 15px;
    font-weight: italic;
    color: #00000;
`;
export const LabelMinorHeader = styled.label`
    font-size: 15px;
    font-weight: italic;
    color: #ffffff;
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

export const StrongHeader = styled.strong`
    cursor: pointer;
    a {
        text-decoration: none;
        color: #ffffff;
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
export const ButtonNewTags = styled.button`
    padding: 9px 10px;
    border: none;
    background-color: #006e30;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
    margin-left: 10px;
`
export const gridCad = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
`;


export const Form = styled.form`
    width: 100%;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 5px;
    }

    input,
    textarea {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    textarea {
        resize: vertical;
    }
`;

export const SubmitButton = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;


export const EditButton = styled.button`
    padding: 8px 20px;
    border: none;
    background-color: #ffe600;
    color: #000000;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

export const DeleteButton = styled.button`
    padding: 8px 20px;
    border: none;
    background-color: #ff0000;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
    &:hover {
        background-color: #0056b3;
    }
`;

export const TagsButton = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: #5d38c9;
    color: #000000;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;
