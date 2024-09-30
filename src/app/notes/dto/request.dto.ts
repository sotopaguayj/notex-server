import { body, param } from "express-validator";

export const validateUUID = param("id")
  .isUUID()
  .withMessage("is invalid, must be a uuid.");

const validateTitle = body("title")
  .notEmpty()
  .withMessage("is Required.")
  .isString()
  .withMessage("is invalid, must be a string")
  .isLength({ max: 20, min: 5 })
  .withMessage("length is invalid");

const validateDescription = body("description")
  .notEmpty()
  .withMessage("is Required.")
  .isString()
  .withMessage("is invalid, must be a string")
  .isLength({ max: 50, min: 10 })
  .withMessage("length is invalid");

const validateContent = body("content")
  .notEmpty()
  .withMessage("is Required.")
  .isString()
  .withMessage("is invalid, must be a string")
  .isLength({ max: 200, min: 10 })
  .withMessage("length is invalid");

export const ValidateOneNote = [
  validateTitle,
  validateDescription,
  validateContent,
];

export const validateUpdateNote = [
  validateUUID,
  body("title").optional().isString().isLength({ max: 20, min: 5 }),
  body("description").optional().isString().isLength({ max: 50, min: 10 }),
  body("content").optional().isString().isLength({ max: 200, min: 10 }),
];
