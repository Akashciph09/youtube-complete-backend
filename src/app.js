import express, { application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
//import { trusted } from "mongoose";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//This line in your Express backend tells Express to serve static files (like HTML, CSS, JS, images, etc.) from the "public" folder to the browser.
app.use(express.static("public"));

//cookie-parser is middleware that lets you easily read cookies sent by the browser in an Express app.
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes decleration
app.use("/api/v1/users", userRouter);

//http.//localhost:8000/api/v1/users/register

export { app };

//export default app;
