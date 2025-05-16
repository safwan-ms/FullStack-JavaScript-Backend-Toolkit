import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("MongoDB successfully connected");
  } catch (e) {
    console.log("MongoDB connection Failed : ", e);
    process.exit(1);
  }
};

export default connectDB;
