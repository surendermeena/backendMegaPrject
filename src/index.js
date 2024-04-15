import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    try {
      app.listen(process.env.PORT || 8000, (req, res) => {
        console.log(`server is running at port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log(`Error in server running ${error}`);
    }
  })
  .catch((error) => {
    console.log("Mongo DB connection Failed", error);
  });

/*

(async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();
*/
