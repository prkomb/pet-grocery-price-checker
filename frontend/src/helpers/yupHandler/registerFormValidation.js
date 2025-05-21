import * as yup from "yup";

const registerValidation = yup.object().shape({
  email: yup.string().email("Must be valid email"),
  password: yup
    .string()
    .min(8, "Password must be more then 8")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must be at least 6 characters with one uppercase, one lowercase, one number, and one special character"
    ),
});

export default registerValidation;
