import { createContext, useEffect, useState } from "react";
import Register from "../services/Login/register";
import Authenticate from "../services/Login/authenticate";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storagedUser = localStorage.getItem("@Auth:user");
        const storagedToken = localStorage.getItem("@Auth:token");

        if (storagedUser && storagedToken) {
            const hasUser = JSON.parse(storagedUser)?.filter((user) => user.email === JSON.parse(storagedUser).email);

            if (hasUser) {
                setUser(hasUser[0]);
            }
        }

        // setLoading(false);
    }, []);

    // rememberMe is a boolean valuer that indicates if the user wants to keep logged in
    const signIn = async (login, pass, remenberMe) => {

        if(!login || !pass) {
            return "Email e senha são obrigatórios";
        }

        const token = await Authenticate(login, pass, remenberMe);
        if(!token) {
            return "Email ou senha inválidos";
        }

        localStorage.setItem("@Auth:token", JSON.stringify(token));
        setUser({ login: login, token: token.id_token });

    };

    const signOut = () => {
        setUser(null);

        localStorage.removeItem("@Auth:user");
        localStorage.removeItem("@Auth:token");
    };

    const signUp = async (firstName, lastName, login, password, email) => {
        if(!login || !password || !firstName) {
            return "Email, senha e nome são obrigatórios";
        }
        
        const response = await Register(firstName, lastName, login, password, email);
        if(!response) {
            return "Erro ao cadastrar";
        }
        return true;
    }

    return (
        <AuthContext.Provider value={{user, signed: !!user, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}