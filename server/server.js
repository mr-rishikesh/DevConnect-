import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import authRouter from "./routes/authRoutes.js";
import connectDB from "./lib/db.js";
import reportRouter from "./routes/report.route.js";
import postRouter from "./routes/post.route.js";
dotenv.config();

const app = express();
//app.use(cors());

app.use(express.json({ limit: '10mb' }));

app.use(express.static("public"));
import cookieParser from 'cookie-parser';
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",   // frontend origin
  credentials: true,                 // allow credentials (cookies, auth headers)
}));

connectDB();


app.use("/auth" , authRouter)
app.use("/report" , reportRouter)
app.use("/post" , postRouter)
app.listen(3000 , ()=> {
    console.log("server is listening at port 3000")
})

