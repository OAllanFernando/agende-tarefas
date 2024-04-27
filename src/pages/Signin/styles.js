import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const content = styled.div`
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
    width: 100%;
    max-width: 350px;
`;

export const Label = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: #676767;
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

export const Strong = styled.strong`
    cursor: pointer;
    a {
        text-decoration: none;
        color: #676767;
    }
`;