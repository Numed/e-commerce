import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  orderNumber: Yup.string(),
  question: Yup.string().required("Enter some text here before submiting"),
});
