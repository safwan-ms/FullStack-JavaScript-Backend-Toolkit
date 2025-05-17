import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB is successfully connected`);
  } catch (err) {
    console.error("MongoDB connection failed ", err.message);
  }
};

export default connectDB;
