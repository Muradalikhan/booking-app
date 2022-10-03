import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDb disconnected!")
})
app.listen(8800, () => {
  connect();
  console.log("run on port 8800");
});

app.get("/",(req,res)=>{
    res.send("this is the api request")
})