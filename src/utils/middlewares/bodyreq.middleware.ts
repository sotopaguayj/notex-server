import { NextFunction, Request, Response } from "express";

const ExtraFieldsRequestMiddleware = (allowedFields: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const bodyFields = Object.keys(req.body);
    const extraFields = bodyFields.filter(
      (field) => !allowedFields.includes(field)
    );

    if (extraFields.length > 0) {
      res
        .status(400)
        .json({ error: `Invalid fields: ${extraFields.join(", ")}` });
      return;
    }

    next();
  };
};

export default ExtraFieldsRequestMiddleware;
