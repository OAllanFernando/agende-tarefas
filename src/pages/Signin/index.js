// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "../../components/Button";
// import { Input } from "../../components/Input";
// import * as Style from "./styles";
// import useAuth from "../../hooks/useAuth";

// const Signin = () => {

//     const [login, setLogin] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const { signin } = useAuth();


//     return (
//         <Style.Container>
//             <Style.Label>Sistema de Login</Style.Label>
//             <Style.Content>
//                 <Input
//                     type="text"
//                     placeholder="Login"
//                     value={login}
//                     onChange={(e) => setLogin(e.target.value)}
//                 />
//                 <Input
//                     type="password"
//                     placeholder="Senha"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button
//                     onClick={async () => {
//                         try {
//                             await signin(login, password);
//                         } catch (error) {
//                             setError(error.message);
//                         }
//                     }}
//                 >
//                     Entrar
//                 </Button>
//                 <Link to="/signup">Criar conta</Link>
//                 {error && <Style.Error>{error}</Style.Error>}
//             </Style.Form>

//         </Style.Container>

//     );
// }

// export default Signin;