import { Formik, Form } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
  BtnRegister,
} from "./styles";
import {
  InputError,
  InputContainer,
  LabelInner,
  FormInput,
  FormLabel,
} from "../../styles";
import { LoginSchema } from "./validationSchema";
import useRequestService from "../../service";
import { notifyError, notifySuccses } from "../../helpers/notify";
import { LoginContext } from "../Context";

const LoginContent = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(LoginContext);
  const { loginUser } = useRequestService();
  const onSubmit = (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    loginUser(loginData).then(onResolve).catch(onError);
  };

  const onResolve = (data) => {
    console.log(data);
    setUser({
      userId: data.id,
      email: data.email,
      token: data.tokem,
    });
    localStorage.setItem("token", data.token);
    notifySuccses("You successfully sign in!");
    setTimeout(() => {
      return navigate("/");
    }, 2000);
  };

  const onError = (data) => {
    notifyError(data);
  };

  return (
    <SectionContainer>
      <SectionInner>
        <FormSection>
          <FormTitle>Log in</FormTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { resetForm }) => {
              onSubmit(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
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
                  <BtnSubmit type="submit">Login</BtnSubmit>
                </FormSection>
              </Form>
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
          <BtnRegister to="/register">Create Account</BtnRegister>
        </InfoSection>
      </SectionInner>
    </SectionContainer>
  );
};

export default LoginContent;
