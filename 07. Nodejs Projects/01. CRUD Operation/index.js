import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import bookRoutes from "./routes/bookRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);

app.use(express.json());

app.use("/api/books", bookRoutes);

app.listen(port, () => console.log(`Server is listening to ${port}`));
