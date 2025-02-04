import { HeroesModel } from "../../model/heroes/HeroesModel";

export async function createHeroes(req: any, res: any){
  try {
    const {name, imgURL, rating} = req.body

    if(!name || !imgURL || !rating) throw new Error("missing data")
        await HeroesModel.create({
            name,
            imgURL,
            rating,
        })

        return res.status(201).send({ message: "Heroes Created successfully" });

    } catch (error: any) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
}