import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import authRouter from "./routes/authRoutes.js";
import connectDB from "./lib/db.js";
import reportRouter from "./routes/report.route.js";
import postRouter from "./routes/post.route.js";
import projectRouter from "./routes/projectRoutes.js";
import axios from "axios"

dotenv.config();

const app = express();

app.use(express.json({ limit: '10mb' }));

app.use(express.static("public"));
import cookieParser from 'cookie-parser';
import updateProfileRoute from "./routes/updateProfileRoute.js";
app.use(cookieParser());


const allowedOrigins = ['http://localhost:5173', 'https://dev-connect-lemon-pi.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // allow cookies or headers
}));


connectDB();


app.use("/auth", authRouter)
app.use("/report", reportRouter)
app.use("/post", postRouter)
app.use("/api/projects", projectRouter);
app.use("/users", updateProfileRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running perfectly"
  })
})



// *--------------------- SELF PING
const interval = 300000; // Interval in milliseconds (5 minutes)
function reloadWebsite() {
  axios.get(process.env.SERVER_URL)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}
setInterval(reloadWebsite, interval);


app.listen(3000, () => {
  console.log("server is listening at port 3000")
})

