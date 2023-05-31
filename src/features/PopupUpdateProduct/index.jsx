import { useContext, useState, useEffect } from "react";
import { Formik, Form } from "formik";

import {
  SectionContainer,
  SectionTitle,
  SectionInner,
  FormSection,
  BtnSubmit,
} from "./styles";
import {
  InputError,
  InputContainer,
  InputGroup,
  InputSection,
  LabelInner,
  FormInput,
  FormLabel,
} from "../../styles";
import { FormikTextarea } from "../../helpers/formik";
import { UpdateCardSchema } from "./validationSchema";
import useRequestService from "../../service";
import { notifyError, notifyUpdate } from "../../helpers/notify";
import { ProductsContext } from "../Context";

const PopupUpdateProduct = ({ id, setId }) => {
  const [productInfo, setProductInfo] = useState({
    title: "",
    brand: "",
    price: 0,
    description: "",
  });
  const { products, setProducts } = useContext(ProductsContext);
  const { updateProduct } = useRequestService();

  useEffect(() => {
    setProductInfo(products.filter((el) => el.id === id)[0]);
  }, []);

  const onSubmit = (data) => {
    updateProduct(id, data).then(onResolve).catch(onError);
  };

  const onResolve = (data) => {
    const filterProducts = products.filter((el) => el.id !== data.id);
    setProducts([...filterProducts, data]);
    notifyUpdate(data.message);
    setId(null);
  };

  const onError = (data) => {
    notifyError(data.message);
  };

  return (
    <SectionContainer>
      <SectionInner>
        <Formik
          initialValues={{
            title: productInfo.title,
            brand: productInfo.brand,
            price: productInfo.price,
            description: productInfo.description,
          }}
          validationSchema={UpdateCardSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <SectionTitle>Update product</SectionTitle>
              <FormSection>
                <InputSection>
                  <InputGroup>
                    <InputContainer>
                      <LabelInner>
                        <FormLabel>
                          Title <span>*</span>
                        </FormLabel>
                        {errors.title && touched.title ? (
                          <InputError>{errors.title}</InputError>
                        ) : null}
                        <FormInput type="text" name="title" required />
                      </LabelInner>
                    </InputContainer>
                    <InputContainer>
                      <LabelInner>
                        <FormLabel>
                          Brand <span>*</span>
                        </FormLabel>
                        {errors.brand && touched.brand ? (
                          <InputError>{errors.brand}</InputError>
                        ) : null}
                        <FormInput type="text" name="brand" required />
                      </LabelInner>
                    </InputContainer>
                  </InputGroup>
                  <InputGroup>
                    <InputContainer>
                      <LabelInner>
                        <FormLabel>
                          Price <span>*</span>
                        </FormLabel>
                        {errors.price && touched.price ? (
                          <InputError>{errors.price}</InputError>
                        ) : null}
                        <FormInput type="number" name="price" required />
                      </LabelInner>
                    </InputContainer>
                  </InputGroup>
                </InputSection>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>Description</FormLabel>
                    {errors.description && touched.description ? (
                      <InputError>{errors.description}</InputError>
                    ) : null}
                    <FormikTextarea name="question" required />
                  </LabelInner>
                </InputContainer>
                <BtnSubmit type="submit">Update product</BtnSubmit>
              </FormSection>
            </Form>
          )}
        </Formik>
      </SectionInner>
    </SectionContainer>
  );
};

export default PopupUpdateProduct;
