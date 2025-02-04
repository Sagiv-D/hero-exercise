import { AuthModel } from '../../model/auth/authModel';
import bcrypt from 'bcrypt';
const saltRounds = parseInt(process.env.SALT_BCRYPT || "10", 10);

export const secret = process.env.SECRET_JWT || "secret"
export async function authRegister(req: any, res: any) {
    try {
        const { password, name } = req.body;

        if (!password || !name) {
            throw new Error('Please fill all fields');
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await AuthModel.create({
            name,
            password: hashedPassword,
        })

        return res.status(201).send({ message: "User registered successfully" });

    } catch (error: any) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}
