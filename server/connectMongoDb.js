import mongoose from "mongoose";

const connectDB = async () => {
  const connectionUrl = process.env.CONNECTION_URL;

  if (!connectionUrl) {
    throw new Error(
      "CONNECTION_URL is missing. Add it in server/.env from your MongoDB Atlas Drivers connection string."
    );
  }

  try {
    const conn = await mongoose.connect(connectionUrl);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};

export default connectDB;
