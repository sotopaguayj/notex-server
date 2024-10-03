import { body } from "express-validator";

const validateName = body("name")
  .notEmpty()
  .withMessage("is Required.")
  .isString()
  .withMessage("is invalid, must be a string")
  .isLength({ max: 10, min: 3 })
  .withMessage("length is invalid");

const validateLastName = body("lastname")
  .notEmpty()
  .withMessage("is Required.")
  .isString()
  .withMessage("is invalid, must be a string")
  .isLength({ max: 20, min: 3 })
  .withMessage("length is invalid");

const validateState = body("state")
  .optional()
  .isString()
  .withMessage("is invalid, must be a string")
  .isLength({ max: 100, min: 10 })
  .withMessage("length is invalid");

const validateUsername = body("username")
  .notEmpty()
  .withMessage("is Required.")
  .isString()
  .withMessage("is invalid, must be a string")
  .isLength({ max: 200, min: 10 })
  .withMessage("length is invalid");

const validatePassword = body("password")
  .notEmpty()
  .withMessage("is Required.")
  .isString()
  .withMessage("is invalid, must be a string")
  .isLength({ max: 30, min: 8 })
  .withMessage("length is invalid");

export const ValidateUserReq = [
  validateName,
  validateLastName,
  validateState,
  validateUsername,
  validatePassword,
];
