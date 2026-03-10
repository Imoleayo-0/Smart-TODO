import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URI)
export async function connectToDb() {
  try {
    const uri = process.env.MONGO_URI;
    const connected = await mongoose.connect(uri);

    if (connected) {
      console.log("Connected to db");
    } else {
      console.log("Failed to connect to db");
    }
  } catch (error) {
    console.log("errorConnectingToDb", error);
  }
}


