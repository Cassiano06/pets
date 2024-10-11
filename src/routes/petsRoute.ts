import { Router } from "express";
import { createPet, deletePetById, getPetById, listPets, updatePetById } from "../controllers/petsController";
const petsRouter = Router()
petsRouter.get("/pets", listPets)
petsRouter.post("/pets", createPet)
petsRouter.delete("/pets/:petId", deletePetById)
petsRouter.put("/pets/:petId",updatePetById)
petsRouter.get("/pets/:petId", getPetById)

export default petsRouter;