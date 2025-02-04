import express from 'express';
import { createHeroes } from '../../controllers/heroes/createHeroes';
import { getHeroes } from '../../controllers/heroes/getHeroes';
import { deleteHeroes } from '../../controllers/heroes/deleteHeroes';
import { rateHeroes } from '../../controllers/heroes/rateHeroes';
import { filterHeroes } from '../../controllers/heroes/FilterHeroes';
import { searchHeroes } from '../../controllers/heroes/searchHeroes';

const router = express.Router();

router.post("/", createHeroes);
router.get("/", getHeroes);
router.delete("/:id", deleteHeroes); 
router.put("/:id/rate", rateHeroes);
router.get("/filter/:rating", filterHeroes);
router.get("/search/:name", searchHeroes); 

export default router;
