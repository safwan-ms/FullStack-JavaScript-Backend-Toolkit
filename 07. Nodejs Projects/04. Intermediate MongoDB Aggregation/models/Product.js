import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  inStock: Boolean,
  tags: [String],
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
