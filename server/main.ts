import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./api/connect";
import  postRoutes from './routers/postRoutes'
import AIRoutes from './routers/AIRoutes'

const PORT = "8080";

dotenv.config();

const app = express();

connectDB(process.env.MONGODB_URL)

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use('/kurzgezaht/post', postRoutes)
app.use('/kurzgezaht/aiPost', AIRoutes)

const initServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
          });
          
    } catch (error) {
        console.log(error)
    }
}

initServer()



