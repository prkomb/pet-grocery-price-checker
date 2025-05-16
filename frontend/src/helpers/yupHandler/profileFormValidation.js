import * as yup from "yup";

const profileFormValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),

  surname: yup
    .string()
    .required("Surname is required")
    .min(2, "Surname must be at least 2 characters")
    .matches(
      /^[A-Za-z\s\-']+$/,
      "Surname can only contain letters, spaces, hyphens and apostrophes"
    ),
  city: yup
    .string()
    .required("City is required")
    .min(2, "City must be at least 2 characters")
    .matches(
      /^[A-Za-z\s\-']+$/,
      "City can only contain letters, spaces, hyphens and apostrophes"
    ),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(\+44|0)7\d{9}$/,
      "Please enter a valid UK mobile number (starting with 07 or +447)"
    ),

  postcode: yup
    .string()
    .required("Postcode is required")
    .matches(
      /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i,
      "Please enter a valid UK postcode"
    ),
});

export default profileFormValidation;
