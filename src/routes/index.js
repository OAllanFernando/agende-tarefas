import { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

import useAuth from "../hooks/useAuth";

const Private = ({ children }) => {
    const { signed } = useAuth();

    return signed ? children : <Signin />; 
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private><Home /></Private>} />
                    <Route path="/signin" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>

    );
}

export default RoutesApp;
