import * as Yup from "yup";

export const CreateCardSchema = Yup.object().shape({
  title: Yup.string().required("Not valid title"),
  brand: Yup.string().required("Not valid brand"),
  price: Yup.number().required("Not valid price"),
  options: Yup.string().required("Not valid options"),
  description: Yup.string().required("Not valid description"),
});
