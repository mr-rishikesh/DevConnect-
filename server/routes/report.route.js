import { getReports, uploadReportController } from "../controller/report.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import express from "express"


const reportRouter = express.Router();

reportRouter.post("/upload", protectRoute , uploadReportController )
reportRouter.get("/get-reports" , protectRoute , getReports)

export default reportRouter