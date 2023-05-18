import { Formik } from "formik";

import {
  SectionContainer,
  SectionInner,
  InfoItem,
  InfoList,
  InfoSection,
  InfoSubtitle,
  InfoTitle,
  FormSection,
  FormTitle,
  BtnSubmit,
} from "./styles";

import {
  InputError,
  InputContainer,
  LabelInner,
  FormInput,
  FormLabel,
} from "../../styles";

import { LoginSchema } from "./validationSchema";

const LoginContent = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SectionContainer>
      <SectionInner>
        <FormSection>
          <FormTitle>Log in</FormTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <FormSection>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Email Address <span>*</span>
                    </FormLabel>
                    {errors.email && touched.email ? (
                      <InputError>{errors.email}</InputError>
                    ) : null}
                    <FormInput type="email" name="email" required />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Password <span>*</span>
                    </FormLabel>
                    {errors.password && touched.password ? (
                      <InputError>{errors.password}</InputError>
                    ) : null}
                    <FormInput type="password" name="password" required />
                  </LabelInner>
                </InputContainer>
                <BtnSubmit>Login</BtnSubmit>
              </FormSection>
            )}
          </Formik>
        </FormSection>
        <InfoSection>
          <InfoTitle>New Customer</InfoTitle>
          <InfoSubtitle>
            Create an account with us and you'll be able to:
          </InfoSubtitle>
          <InfoList>
            <InfoItem>Check out faster</InfoItem>
            <InfoItem>Save multiple shipping addresses</InfoItem>
            <InfoItem>Access your order history</InfoItem>
            <InfoItem>Track new orders</InfoItem>
            <InfoItem>Save items to your wish list</InfoItem>
          </InfoList>
          <BtnSubmit to="/register">Create Account</BtnSubmit>
        </InfoSection>
      </SectionInner>
    </SectionContainer>
  );
};

export default LoginContent;
