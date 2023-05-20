import { useCallback, useState } from "react";
import { Formik } from "formik";
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

const CreateCardContent = () => {
  const [uploadedImg, setUploadedImg] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
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
      <SectionTitle>Create New Card</SectionTitle>
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
        </DropzoneContainer>
        <Formik
          initialValues={{
            title: "",
            brand: "",
            price: 0,
            options: "",
            description: "",
          }}
          validationSchema={CreateCardSchema}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ errors, touched }) => (
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
                <LabelInner className="single-field">
                  <FormLabel>
                    Options <span>*</span>
                  </FormLabel>
                  {errors.options && touched.options ? (
                    <InputError>{errors.options}</InputError>
                  ) : null}
                  <FormInput
                    type="text"
                    name="options"
                    required
                    placeholder="For example: 200x200,300x30"
                  />
                </LabelInner>
              </InputContainer>
              <InputContainer>
                <LabelInner>
                  <FormLabel>Description</FormLabel>
                  {errors.description && touched.description ? (
                    <InputError>{errors.description}</InputError>
                  ) : null}
                  <FormikTextarea name="question" required />
                </LabelInner>
              </InputContainer>
              <BtnSubmit>Create new card</BtnSubmit>
            </FormSection>
          )}
        </Formik>
      </SectionInner>
    </SectionContainer>
  );
};

export default CreateCardContent;
