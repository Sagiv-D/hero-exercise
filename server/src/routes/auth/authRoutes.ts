import express from 'express';
import { authLogin} from '../../controllers/auth/login';
import { authRegister } from '../../controllers/auth/register';

const router = express.Router();

router.post("/login", authLogin)
router.post("/register", authRegister)

export default router