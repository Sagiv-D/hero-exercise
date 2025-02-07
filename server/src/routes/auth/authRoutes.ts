import express from 'express';
import { authLogin} from '../../controllers/auth/login';
import { authRegister } from '../../controllers/auth/register';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
const router = express.Router();

router.post("/login", authLogin)
router.post("/register", authRegister)
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

export default router