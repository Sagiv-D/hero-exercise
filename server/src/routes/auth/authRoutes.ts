import express from 'express';
import { authLogin} from '../../controllers/auth/login';
import { authRegister } from '../../controllers/auth/register';
// import { authValidate } from '../../controllers/auth/validate';
const router = express.Router();

router.post("/login", authLogin)
router.post("/register", authRegister)
// router.get("/validate", authValidate);


export default router