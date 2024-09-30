import { Router } from "express";
import NotesController from "./notes.controller";
import RequestErrorsHandlerMiddleware from "../../utils/middlewares/errorreq.middleware";
import ExtraFieldsRequestMiddleware from "../../utils/middlewares/bodyreq.middleware";
import {
  ValidateOneNote,
  validateUpdateNote,
  validateUUID,
} from "./dto/request.dto";

class NotesRoutes {
  public router = Router();
  private nc: NotesController;
  constructor() {
    this.nc = new NotesController();
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.get(
      "/notes/:id",
      validateUUID,
      RequestErrorsHandlerMiddleware,
      this.nc.readOneNote
    );
    this.router.get("/notes", this.nc.readAllNotes);
    this.router.post(
      "/notes",
      ExtraFieldsRequestMiddleware(["title", "description", "content"]),
      ValidateOneNote,
      RequestErrorsHandlerMiddleware,
      this.nc.createOneNote
    );
    this.router.patch(
      "/notes/:id",
      ExtraFieldsRequestMiddleware(["title", "description", "content"]),
      validateUpdateNote,
      RequestErrorsHandlerMiddleware,
      this.nc.updateOneNote
    );
    this.router.delete(
      "/notes/:id",
      validateUUID,
      RequestErrorsHandlerMiddleware,
      this.nc.deleteOneNote
    );
  }
}

export default new NotesRoutes().router;
