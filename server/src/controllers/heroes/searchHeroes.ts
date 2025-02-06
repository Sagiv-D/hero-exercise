import { HeroesModel } from "../../model/heroes/HeroesModel";

export async function searchHeroes(req: any, res: any) {
    try {
        const { name } = req.query; 

        if (!name) {
            return res.status(400).json({ error: "Please provide a name to search" });
        }

        const heroes = await HeroesModel.find({
            name: { $regex: name, $options: 'i' }
        });

        if (!heroes.length) {
            return res.status(404).json({ message: "No heroes found" });
        }

        res.json({ message: "Heroes found", heroes });

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
