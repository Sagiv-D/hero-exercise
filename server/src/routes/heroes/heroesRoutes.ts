import express from 'express';
import { createHeroes } from '../../controllers/heroes/createHeroes';
import { getHeroes } from '../../controllers/heroes/getHeroes';
import { deleteHeroes } from '../../controllers/heroes/deleteHeroes';
import { rateHeroes } from '../../controllers/heroes/rateHeroes';
import { filterHeroes } from '../../controllers/heroes/filterHeroes';
import { searchHeroes } from '../../controllers/heroes/searchHeroes';

const router = express.Router();

router.post("/create-hero", createHeroes);
router.get("/get-hero", getHeroes);
router.delete("/delete/:heroId", deleteHeroes); 
router.put("/:id/rate", rateHeroes);
router.get("/filter", filterHeroes);
router.get("/search", searchHeroes); 

export default router;
