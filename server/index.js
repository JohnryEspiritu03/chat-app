import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET"]
}));

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose
  .connect(databaseURL)
  .then(() => console.log("DB Connection Successful."))
  .catch((err) => console.log(err.message));
