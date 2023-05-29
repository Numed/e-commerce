import * as Yup from "yup";

export const ShippingSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  line1: Yup.string().required("Enter your Address"),
  line2: Yup.string(),
  company: Yup.string(),
  city: Yup.string().required("Select your city/suburb"),
  zip: Yup.string().required("Select your zip/postcode"),
  phone: Yup.string().required("Phone number is required"),
});
