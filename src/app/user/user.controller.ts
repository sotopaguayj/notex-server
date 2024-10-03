import UserService from "./user.service";
import { Request, Response } from "express";

export default class NotesController {
  private service: UserService;

  public constructor() {
    this.service = new UserService();
  }

  async readOneUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const serviceResponse = await this.service.getUser(id);
      res.status(serviceResponse.status).json(serviceResponse);
      return;
    } catch (error: any) {
      res.status(500).json({ status: 500, message: error.message });
      return;
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const serviceResponse = await this.service.saveUser(req.body);
      res.status(serviceResponse.status).send(serviceResponse);
      return;
    } catch (error: any) {
      res.status(500).json({ status: 500, message: error.message });
      return;
    }
  }
}
