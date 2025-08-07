import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Invalid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(5, "Must be at least 5 characters"),
});
