import { body, validationResult } from "express-validator";

const userValidator = [
  body("email").isEmail().withMessage("Please provide a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password shouldn't be empty")
    .isLength({ min: 5 })
    .withMessage("Minimum 5 character"),

  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { userValidator };
