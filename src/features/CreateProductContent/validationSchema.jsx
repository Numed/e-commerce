import * as Yup from "yup";

export const CreateCardSchema = Yup.object().shape({
  title: Yup.string().required("Not valid title"),
  brand: Yup.string().required("Not valid brand"),
  price: Yup.number().required("Not valid price"),
  description: Yup.string().required("Not valid description"),
});
