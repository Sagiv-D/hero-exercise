import { HeroesModel } from "../../model/heroes/HeroesModel";

export async function rateHeroes(req: any, res: any) {
    try {
        const { id } = req.params;
        const { rating } = req.body; 

        if (typeof rating !== "number" || rating < 0 || rating > 5) {
            return res.status(400).json({ error: "Rating must be a number between 0 and 5" });
        }

        const hero = await HeroesModel.findByIdAndUpdate(id, { rating }, { new: true });

        if (!hero) {
            return res.status(404).json({ error: "Hero not found" });
        }

        res.json({ message: "Hero rated successfully", hero });

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}