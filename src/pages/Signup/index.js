import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import Input from "../../components/Inputs";
import * as Style from "./styles";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Signup = () => {

    const { signUp } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [login, setLogin] = useState("");

    const [error, setError] = useState("");

    const [sucess, setSucess] = useState("");

    const handlRegister = async () => {
        const response = await signUp(name, lastName, login, password, email);
        if (response === 1) {
            setError("Login já em uso, tente um diferente");
            return;
        }
        if (response === 2) {
            setError("Email já em uso, tente um diferente");
            return;
        }
        if (response === 0) {
            setError("Erro ao cadastrar, tente novamente mais tarde");
            return;
        }
        setSucess("Cadastro realizado com sucesso, redirecionando para a página de login");
        setTimeout(() => {
            
            navigate("/signin");
        }, 3000);
        
    }


    return (
        <Style.Container>
            <Style.Content>
                <Style.Label>Bem vindo, Cadastre-se!</Style.Label>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => [setName(e.target.value), setError(""), setSucess("")]}
                />
                <Input
                    type="text"
                    placeholder="Sobrenome"
                    value={lastName}
                    onChange={(e) => [setLastName(e.target.value), setError(""), setSucess("")]}
                />
                <Input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError(""), setSucess("")]}
                />
                <Input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => [setLogin(e.target.value), setError(""), setSucess("")]}
                />
                <Style.LabelMinor>O login é usado para o acesso</Style.LabelMinor>
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError(""), setSucess("")]}
                />
                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmPassword}
                    onChange={(e) => [setConfirmPassword(e.target.value), setError(""), setSucess("")]}
                />
                <Style.LabelError>{error}</Style.LabelError>
                <Style.LabelSucess>{sucess}</Style.LabelSucess>
                <Button
                    Text="Cadastrar"
                    onClick={() => {
                        if (name === "" || lastName === "" || email === "" || login === "" || password === "" || confirmPassword === "") {
                            setError("Preencha todos os campos");
                        } else if (password !== confirmPassword) {
                            setError("As senhas não coincidem");
                        } else {
                            handlRegister();
                        }
                    }}
                />
                <Style.LabelSingUp>
                    Já possui uma conta? <Style.Strong><Link to="/signin">Faça login</Link></Style.Strong>
                </Style.LabelSingUp>

            </Style.Content>
        </Style.Container>
    );
}

export default Signup;