import { Input, Button } from "@chakra-ui/react";
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Login</h2>
        <div className={styles.inputField}>
          <Input placeholder="Username" type='text' size="lg" />
        </div>
        <div className={styles.inputField}>
          <Input placeholder="Password" type='password' size="lg" />
        </div>
        <div className={styles.checkboxLabel}>
          <input type="checkbox" /> <span>Remember Me</span>
        </div>
        <Button className={styles.button} size="lg">Login</Button>
      </div>
    </div>
  );
};

export default Login;
