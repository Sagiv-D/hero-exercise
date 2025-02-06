import { HeroesModel } from "../../model/heroes/HeroesModel";

export async function filterHeroes(req:any, res:any) {
  const minRating = parseFloat(req.query.minRating as string) || 0; 

  try {
    const heroes = await HeroesModel.find({ rating: { $gte: minRating } });

    if (!heroes.length) {
      return res.status(404).json({ message: "No heroes found matching the rating" });
    }

    return res.json({ message: "Heroes successfully retrieved", heroes });
  } catch (error:any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
