import { checkAuth, signUp, signin} from "../controllers/auth.controller.js";

import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";


const authRouter = express.Router();

authRouter.post("/signup" , signUp)

authRouter.post("/signin"  , signin)
authRouter.get("/check" , protectRoute , checkAuth)


export default authRouter
