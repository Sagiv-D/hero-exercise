import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import styles from './HomePage.module.scss'; // ייבוא של המודול SCSS

const HomePage: React.FC = () => {
  return (
    <Router>
      <nav className={styles.navbar}>
        <ul className={styles.navbarLinks}>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
