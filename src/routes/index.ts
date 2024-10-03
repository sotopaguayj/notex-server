import "dotenv/config";
import { Application } from "express";
import userRoutes from "../app/user/user.route";

export default class AppRoutes {
  constructor(app: Application) {
    const user = userRoutes.getInstance();
    app.use("/api", user.router);
  }
}
