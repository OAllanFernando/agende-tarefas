import { createContext, useEffect, useState } from "react";
import Register from "../services/Login/register";
import { Authenticate, findMyUser } from "../services/Login/authenticate";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        console.log("Sempre passo aq");
        const storagedUser = localStorage.getItem("@Auth:user");
        const storagedToken = localStorage.getItem("@Auth:token");

        if (storagedUser && storagedToken) {
            const parsedUser = JSON.parse(storagedUser);
            setUser(parsedUser);
        }
    }, []);

    const signIn = async (login, pass, rememberMe) => {
        if (!login || !pass) {
            return "Email e senha são obrigatórios";
        }

        const token = await Authenticate(login, pass, true);

        if (!token) {
            return "Email ou senha inválidos";
        }

        const user = await findMyUser(token.id_token);

        if (!user) {
            setUser(null);
            return "Erro ao buscar usuário";
        }

        const userData = {
            id: user.id,
            login: login,
            token: token.id_token,
            name: user.firstName,
            lastName: user.lastName,
            email: user.email ? user.email : "Não Informado"
        };

        localStorage.setItem("@Auth:user", JSON.stringify(userData)); // Salvando o usuário completo no localStorage
        localStorage.setItem("@Auth:token", token.id_token);
        setUser(userData); // Definindo o usuário no estado do componente

        return true;
    };
    
    const signOut = () => {
        setUser(null);

        localStorage.removeItem("@Auth:user");
        localStorage.removeItem("@Auth:token");
    };

    const signUp = async (firstName, lastName, login, password, email) => {

        if (!login || !password || !firstName) {
            return "Email, senha e nome são obrigatórios";
        }

        const response = await Register(firstName, lastName, login, password, email);

        console.log("aaaaaaaaaaa", response);
        if (!response) {
            return 0;
        }
        if (response === 1) {
            return 1;
        }
        if (response === 2) {
            return 2;
        }

        return true;
    }

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}