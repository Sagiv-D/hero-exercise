import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import styles from "./Register.module.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Registration failed");

      alert("User registered successfully!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Register</h2>
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
        <div className={styles.inputField}>
          <Input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            size="lg"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <Button className={styles.button} size="lg" onClick={handleRegister}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
