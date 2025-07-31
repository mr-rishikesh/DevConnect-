
import express from "express"
import { addExperiance, deleteExperiance, getExperiance, updateExperiance } from "../controllers/updateProfile.controller.js";

const updateProfileRoute = express.Router();

updateProfileRoute.post("/:userId/experience/:expId" , updateExperiance);
updateProfileRoute.get("/:userId/experience" , getExperiance);
updateProfileRoute.delete("/:userId/experience/:expId" , deleteExperiance);
updateProfileRoute.post("/:userId/experience" , addExperiance);

export default updateProfileRoute