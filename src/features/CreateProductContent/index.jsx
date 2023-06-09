import { useCallback, useContext, useState } from "react";
import { Formik, Form } from "formik";
import { useDropzone } from "react-dropzone";

import {
  SectionContainer,
  SectionTitle,
  FormSection,
  DropzoneContainer,
  DropzoneTitle,
  DropzoneInner,
  DropzoneInput,
  DropzoneText,
  SectionInner,
  Thumb,
  ThumbImg,
  ThumbInner,
  ThumbsContainer,
} from "./styles";
import {
  InputError,
  InputContainer,
  InputGroup,
  InputSection,
  LabelInner,
  FormInput,
  FormLabel,
  BtnSubmit,
} from "../../styles";
import { CreateCardSchema } from "./validationSchema";
import { FormikTextarea } from "../../helpers/formik";
import useRequestService from "../../service";
import { notifyError, notifySuccses } from "../../helpers/notify";
import { ProductsContext } from "../Context";

const CreateProductContent = () => {
  const [uploadedImg, setUploadedImg] = useState(null);
  const { createProduct } = useRequestService();
  const { products, setProducts } = useContext(ProductsContext);

  const onSubmit = (data) => {
    const productData = {
      title: data.title,
      brand: data.brand,
      image: uploadedImg,
      alt: data.title,
      price: "$" + data.price,
    };
    createProduct(productData).then(onResolve).catch(onError);
  };

  const onResolve = (data) => {
    setProducts([...products, data.product]);
    notifySuccses(data.message);
  };

  const onError = (data) => {
    notifyError(data.message);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const data = reader.result;
        setUploadedImg(data);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop, accept: { "image/*": [] } });

  return (
    <SectionContainer>
      <SectionTitle>Create New Product</SectionTitle>
      <SectionInner>
        <DropzoneContainer className="container">
          <DropzoneTitle>Upload image</DropzoneTitle>
          <DropzoneInner
            {...getRootProps({ isFocused, isDragAccept, isDragReject })}
          >
            <DropzoneInput {...getInputProps()} />
            <DropzoneText>
              Drag&drop some files here, or click to select files
            </DropzoneText>
          </DropzoneInner>
          <ThumbsContainer>
            <Thumb>
              <ThumbInner>
                <ThumbImg
                  src={uploadedImg}
                  onLoad={() => {
                    URL.revokeObjectURL(uploadedImg);
                  }}
                />
              </ThumbInner>
            </Thumb>
          </ThumbsContainer>
        </DropzoneContainer>
        <Formik
          initialValues={{
            title: "",
            brand: "",
            price: 0,
            description: "",
          }}
          validationSchema={CreateCardSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
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
                <BtnSubmit type="submit">Create new product</BtnSubmit>
              </FormSection>
            </Form>
          )}
        </Formik>
      </SectionInner>
    </SectionContainer>
  );
};

export default CreateProductContent;
