import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import * as Style from "./styles";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Inputs";

const Signin = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { signIn } = useAuth();

    const handleLogin = async () => {
        const response = await signIn(login, password);
        // console.log(response);
        if (response === "Email e senha são obrigatórios") {
            setError("Email e senha são obrigatórios");
        }
        if (response === "Email ou senha inválidos") {
            setError("Email ou senha inválidos");
        }
        if (response === "Erro ao buscar usuário") {
            setError("Erro ao buscar usuário, tente novamente mais tarde");
        }

        if (response === true) {
            navigate("/home");
        }


    }


    return (
        <Style.Container>
            <Style.Content>
                <Style.Label>Sistema de Cadastro de Tarefas</Style.Label>
                <Input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => [setLogin(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                />
                <Style.LabelError>{error}</Style.LabelError>
                <Button
                    Text="Entrar"
                    onClick={() => {
                        if (login === "" || password === "") {
                            setError("Preencha todos os campos");
                        } else {
                            handleLogin();
                        }
                    }}
                />
                <Style.LabelSingUp>
                    Não possui conta?
                    <Style.Strong>
                        <Link to="/signup">&nbsp;Cadastre-se</Link>
                    </Style.Strong>
                </Style.LabelSingUp>
            </Style.Content>


        </Style.Container>

    );
}

export default Signin;