import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port,()=> {
    console.log(`Server Started at PORT: ${port}`);
    connectDb();
})