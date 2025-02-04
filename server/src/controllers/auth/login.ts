import { AuthModel } from '../../model/auth/authModel';
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';

export const secret = process.env.SECRET_JWT || "secret"

export async function authLogin(req: any, res: any) {
    try {
        const { name, password } = req.body;

        if (!name || !password) throw new Error("Please fill all fields");

        const user = await AuthModel.findOne({ name });
        if (!user) {
            return res.status(400).send({ error: "Invalid name or password" });
        }

        if (!user.password) throw new Error("Invalid name or password");

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).send({ error: "Invalid name or password" });
        }

        const token = jwt.encode({ id: user._id, role: "user" }, secret);
        res.cookie('user', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
        return res.status(200).send({ message: "Login successful", token });

    } catch (error: any) {
        if (error.code = "11000") {
            res.status(400).send({ error: "user already exists" })
        }
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}