import { response } from "express";
import { body, validationResult } from "express-validator";

const registerValidator = [
  body("passwordConfirm").custom((value, { req }) => {
    const compareResult = value !== req.body.password;
    if (compareResult) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

export { registerValidator };
