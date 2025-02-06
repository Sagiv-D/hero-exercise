import { HeroesModel } from "../../model/heroes/HeroesModel";

export async function deleteHeroes(req:any, res:any) {
  const { heroId } = req.params;

  try {
    const hero = await HeroesModel.findById(heroId);

    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }

    await hero.deleteOne();

    return res.json({ message: "Hero successfully deleted" });
  } catch (error:any) {
    console.error(error);
    return res.status(500).json({ error:error.message });
  }
}
