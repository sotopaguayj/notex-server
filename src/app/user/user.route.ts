import { Router } from "express";
import UserController from "./user.controller";
import RequestErrorsHandlerMiddleware from "../../utils/middlewares/errorreq.middleware";
import { validateObjectId } from "../../utils/validators/shared";
import ExtraFieldsRequestMiddleware from "../../utils/middlewares/bodyreq.middleware";
import { ValidateUserReq } from "../../utils/validators/user";

export default class UserRoutes {
  public router = Router();
  private static instance: UserRoutes;
  private nc: UserController;

  private constructor() {
    this.nc = new UserController();
    this.initializeRoutes();
  }

  public static getInstance(): UserRoutes {
    if (!UserRoutes.instance) {
      UserRoutes.instance = new UserRoutes();
    }
    return UserRoutes.instance;
  }

  private initializeRoutes() {
    this.router.get(
      "/user/:id",
      validateObjectId,
      RequestErrorsHandlerMiddleware,
      this.nc.readOneUser.bind(this.nc)
    );

    this.router.post(
      "/user",
      ExtraFieldsRequestMiddleware([
        "name",
        "state",
        "lastname",
        "username",
        "password",
      ]),
      ValidateUserReq,
      RequestErrorsHandlerMiddleware,
      this.nc.createUser.bind(this.nc)
    );
  }
}
