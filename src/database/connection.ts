import mongoose from "mongoose";

const mongodb_cs = process.env.MONGODB_CS;

if (!mongodb_cs) {
  throw new Error("Please provide MONGODB_CS in environment variables");
}

const dbConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to database");
    return;
  }

  try {
    await mongoose.connect(mongodb_cs);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

export default dbConnect;
