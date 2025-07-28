import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
         const connect = await mongoose.connect(MONGO_URI)
         console.log("Database connected successfully " + { connect })
    } catch (error) {
        console.log(error)
        
    }
   
}

export default connectDB