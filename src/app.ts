import express from "express";
import cors from "cors";
import helmet from "helmet";


const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// application routes

// check health
app.get("/", (req, res) => {
    res.send("Server is running...")
})

export default app;