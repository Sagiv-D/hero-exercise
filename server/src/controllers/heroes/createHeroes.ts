import { HeroesModel } from "../../model/heroes/HeroesModel";
import mongoose from 'mongoose';

export async function createHeroes(req: any, res: any) {
    try {
        const { name, imgURL } = req.body;
        
        const userId = new mongoose.Types.ObjectId();
        
        if (!name || !imgURL) {
            throw new Error("missing data");
        }

        const newHero = await HeroesModel.create({
            name,
            imgURL,
            rating: 0,
            userId: userId
        });

        return res.status(201).json(newHero);
    } catch (error: any) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}