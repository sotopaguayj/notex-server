import { prisma } from "../../config/prismaClient";
import { UserSchema } from "./user.entity";
import bcrypt from "bcrypt";

export default class UserService {
  constructor() {}

  private errorResponse = (err: any) => {
    return {
      status: 403,
      message: "Prisma Error",
      error: err.message,
    };
  };

  async getUser(id: string): Promise<serviceResponse> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      if (!user) return { message: "User not found", status: 404 };
      return { message: "User found", status: 200, data: user };
    } catch (error: any) {
      console.log(error.message);
      return this.errorResponse(error);
    }
  }

  async saveUser(data: UserSchema): Promise<serviceResponse> {
    const { password, username } = data;
    const userExist = await prisma.user.findUnique({ where: { username } });
    if (userExist) return { message: "User already exist", status: 409 };
    try {
      const salt = bcrypt.genSaltSync(15);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = { ...data, password: hash };
      const user = await prisma.user.create({
        data: newUser,
      });
      return { message: "User created", status: 201, data: user };
    } catch (error: any) {
      console.log(error.message);
      return this.errorResponse(error);
    }
  }
}

type serviceResponse = {
  message: string;
  status: number;
  data?: any;
  error?: any;
};
