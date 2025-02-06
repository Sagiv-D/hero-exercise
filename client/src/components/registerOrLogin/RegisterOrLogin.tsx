import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";

const RegisterOrLogin: React.FC = () => {
    return (
        <Router>
            <nav className="links">
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default RegisterOrLogin;
