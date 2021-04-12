import mongoose from "mongoose";
import { app } from "./app";
/** setting up db */
const start = async () => {
  if(!process.env.JWT_KEY){
    throw new Error("JWT_KEY must be defined");
  }
  
  try {
    await mongoose.connect("mongodb://authy-mongo-srv:27017/authy", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }

  /** Port Setup */
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

start();