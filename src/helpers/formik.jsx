import { useField } from "formik";
import { FormTextarea } from "../features/Contact/styles";

export const FormikTextarea = ({ ...props }) => {
  const [field] = useField(props);
  return <FormTextarea {...field} {...props} />;
};
