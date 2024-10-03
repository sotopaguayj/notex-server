import { param } from "express-validator";
import { ObjectId } from "mongodb";

export const validateObjectId = param("id")
  .isMongoId()
  .withMessage("is invalid, must be a objectId.");
