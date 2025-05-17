import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import bookRoutes from "./routes/booksRoutes.js";
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDb connected successfully"))
  .catch((e) => console.log("MongoDB connection failed", e.message));

app.use(express.json());

app.use("/products", productRoutes);
app.use("/reference", bookRoutes);
app.listen(process.env.PORT, () => console.log("Server is listening to 3000"));
