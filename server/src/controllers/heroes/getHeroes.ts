import { HeroesModel } from "../../model/heroes/HeroesModel";
import jwt from 'jwt-simple';

export const secret = process.env.SECRET_JWT || "secret"

export async function getHeroes(req: any, res: any) {
    try {
        const heroes = await HeroesModel.find({});
        res.json({ heroes });
    } catch (error: any) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}