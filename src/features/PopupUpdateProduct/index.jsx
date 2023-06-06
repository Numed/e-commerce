import { useContext, useState, useEffect } from "react";
import { Formik } from "formik";

import {
  SectionContainer,
  SectionTitle,
  SectionInner,
  FormSection,
  BtnSubmit,
  CloseBtn,
  StyledForm,
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

const PopupUpdateProduct = ({ id, setId, setIsOpenPopup }) => {
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
    // eslint-disable-next-line
  }, []);

  const onSubmit = (data) => {
    const updateData = {
      title: data.title,
      brand: data.brand,
      price: "$" + data.price,
      description: data.description,
      alt: data.title,
    };
    updateProduct(id, updateData).then(onResolve).catch(onError);
  };

  const onResolve = (data) => {
    const filterProducts = products.filter((el) => el.id !== data.id);
    setProducts([...filterProducts, data.product]);
    notifyUpdate(data.message);
    setId(null);
    setIsOpenPopup(false);
  };

  const onError = (data) => {
    notifyError(data.message);
  };

  const getValidPrice = (price) => {
    if (price <= 0) return;
    if (+price.substring(1).slice(0, -3).replaceAll(",", "") >= 1000) {
      return +price.substring(1).slice(0, -3).replaceAll(",", "");
    } else {
      return price.substring(1);
    }
  };

  return (
    <SectionContainer>
      <SectionInner>
        <Formik
          enableReinitialize
          initialValues={{
            title: productInfo.title,
            brand: productInfo.brand,
            price: getValidPrice(productInfo.price),
            description: productInfo.description,
          }}
          validationSchema={UpdateCardSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <SectionTitle>Update product</SectionTitle>
              <CloseBtn onClick={() => setIsOpenPopup(false)} />
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
                    <FormikTextarea name="description" required />
                  </LabelInner>
                </InputContainer>
                <BtnSubmit type="submit">Update product</BtnSubmit>
              </FormSection>
            </StyledForm>
          )}
        </Formik>
      </SectionInner>
    </SectionContainer>
  );
};

export default PopupUpdateProduct;
