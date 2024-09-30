import "dotenv/config";
import { Application } from "express";
import notesRoutes from "../app/notes/notes.router";

// const BASE_PATH = process.env.APP_PATH;

export default class AppRoutes {
  constructor(app: Application) {
    app.use("/api", notesRoutes);
    // this.showRoutes();
  }
  // showRoutes() {
  //   notesRoutes.stack.forEach((r) =>
  //     console.log(
  //       // @ts-ignores
  //       `[ROUTE][${Object.keys(r.route?.methods)[0].toUpperCase()}] ${
  //         BASE_PATH + "/api" + r.route?.path
  //       }`
  //     )
  //   );
  // }
}
