import { HeroesModel } from "../../model/heroes/HeroesModel";
import jwt from 'jwt-simple';

export const secret = process.env.SECRET_JWT || "secret"

export async function getHeroes(req: any, res: any) {
    try {
        const { user } = req.cookies;
        
        const decoded = jwt.decode(user, secret);

        const Heroes = await HeroesModel.find({ userId: decoded.id }).populate('userId');
        res.json({ message: "Get all Your Heroes", userId: decoded.id, Heroes });

    } catch (error: any) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}
