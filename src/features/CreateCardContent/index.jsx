import { Formik } from "formik";

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
import { SectionContainer, SectionTitle, FormSection } from "./styles";
import { CreateCardSchema } from "./validationSchema";
import { FormikTextarea } from "../../helpers/formik";

const CreateCardContent = () => {
  const onSubmit = () => {};
  return (
    <SectionContainer>
      <SectionTitle>Create New Card</SectionTitle>
      <Formik
        initialValues={{
          title:""
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
                    {errors.phone && touched.phone ? (
                      <InputError>{errors.phone}</InputError>
                    ) : null}
                    <FormInput type="text" name="phone" required />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Price <span>*</span>
                    </FormLabel>
                    {errors.phone && touched.phone ? (
                      <InputError>{errors.phone}</InputError>
                    ) : null}
                    <FormInput type="text" name="phone" required />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
              <InputGroup>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Brand <span>*</span>
                    </FormLabel>
                    {errors.phone && touched.phone ? (
                      <InputError>{errors.phone}</InputError>
                    ) : null}
                    <FormInput type="text" name="phone" required />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
            </InputSection>
            <InputContainer>
              <LabelInner className="single-field">
                <FormLabel>
                  Options <span>*</span>
                </FormLabel>
                {errors.line2 && touched.line2 ? (
                  <InputError>{errors.line2}</InputError>
                ) : null}
                <FormInput
                  type="text"
                  name="line2"
                  required
                  placeholder="For example: 200x200,300x30"
                />
              </LabelInner>
            </InputContainer>
            <InputContainer>
              <LabelInner>
                <FormLabel>Description</FormLabel>
                {errors.line2 && touched.line2 ? (
                  <InputError>{errors.line2}</InputError>
                ) : null}
                <FormikTextarea name="question" required />
              </LabelInner>
            </InputContainer>
            <BtnSubmit>Create new card</BtnSubmit>
          </FormSection>
        )}
      </Formik>
    </SectionContainer>
  );
};

export default CreateCardContent;
