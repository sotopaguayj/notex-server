import { connectDB, disconnectDB } from "./config/prismaClient";
import express, { Application } from "express";
import Server from "./index";
import "dotenv/config";

const app: Application = express();
new Server(app);
const PORT: number = process.env.APP_PORT
  ? parseInt(process.env.APP_PORT, 10)
  : 8080;

app
  .listen(PORT, () => {
    console.log(`[SERVER] running on port ${PORT} 🛸`);
    connectDB();
  })
  .on("error", (err: any) => {
    console.log(err);
    disconnectDB();
  });
