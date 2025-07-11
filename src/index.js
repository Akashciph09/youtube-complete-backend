import connectDB from "./db/index.js";

//require("dotenv").config({path:'./env'})
//dotenv is a Node.js library that loads environment variables from a file (like .env or env) into process.env.
import dotenv from "dotenv";
import { app } from "./app.js";
const PORT = process.env.PORT;

dotenv.config({
  path: "./.env", //It tells dotenv where to find your environment file.
});

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      //if promise is returned successfully
      console.log(`Server is running at port:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection faileddd !!!", err);
  });
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR ", error);
    throw error;
  }
})();
*/
