import express from "express";
import cors from "cors";


const app = express();

// middleware
app.use(express.json());
app.use(cors());

// application routes

// check health
app.get("/", (req, res) => {
    res.send("Server is running...")
})

export default app;