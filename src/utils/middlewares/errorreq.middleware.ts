import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const RequestErrorsHandlerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    const errors = validation
      .array()
      // @ts-ignore
      .map(({ path, msg }) => path + " " + msg);
    res.status(400).json({
      status: 400,
      message: "Bad Request",
      errors: errors,
    });
    return;
  }
  next();
};

export default RequestErrorsHandlerMiddleware;
