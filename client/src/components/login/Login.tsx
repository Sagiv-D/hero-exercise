import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import styles from "./Login.module.scss";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("userToken", data.token);

      alert("Login successful!");
      window.location.reload();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Login</h2>
        <div className={styles.inputField}>
          <Input
            placeholder="Username"
            name="name"
            type="text"
            size="lg"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputField}>
          <Input
            placeholder="Password"
            name="password"
            type="password"
            size="lg"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button className={styles.button} size="lg" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
