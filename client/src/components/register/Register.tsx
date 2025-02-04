import { Input, Button } from "@chakra-ui/react";
import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Register</h2>
        <div className={styles.inputField}>
          <Input placeholder="Username" type="text" size="lg" />
        </div>
        <div className={styles.inputField}>
          <Input placeholder="Password" type="password" size="lg" />
        </div>
        <div className={styles.inputField}>
          <Input placeholder="Confirm Password" type="password" size="lg" />
        </div>
        <Button className={styles.button} size="lg">Register</Button>
      </div>
    </div>
  );
};

export default Register;
