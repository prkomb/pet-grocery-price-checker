import { body } from "express-validator";

const registerValidator = [
  body("passwordConfirm").custom((value, { request }) => {}),
  //   complete to write this function
];

export { registerValidator };
