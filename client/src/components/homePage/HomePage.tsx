import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import styles from './HomePage.module.scss';
import { Dashboard } from "../dashboard/Dashboard";

const HomePage: React.FC = () => {
  return (
    <Router>
      <nav className={styles.navbar}>
        <ul className={styles.navbarLinks}>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
