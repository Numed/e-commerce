import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { Formik } from "formik";

import {
  FooterContainer,
  FooterDataContainer,
  FormSubtitle,
  FormTitle,
  CopyRights,
  IconsContainer,
  StyledLink,
  AdressInner,
  PhoneNumber,
  DataSection,
  LinksNav,
  LinksSection,
  FormSection,
} from "./styles";

import {
  InputError,
  InputContainer,
  LabelInner,
  FormInput,
  FormLabel,
  BtnSubmit,
} from "../../styles";

import { FooterSchema } from "./validateSchema";

const Footer = () => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <FooterContainer>
      <FooterDataContainer>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={FooterSchema}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <FormSection>
              <FormTitle>Join our mailing list</FormTitle>
              <FormSubtitle>We promise to send only good things.</FormSubtitle>
              <InputContainer className="footer-container">
                <LabelInner>
                  <FormLabel>Email Address</FormLabel>
                  {errors.email && touched.email ? (
                    <InputError>{errors.email}</InputError>
                  ) : null}
                  <FormInput type="email" name="email" required />
                </LabelInner>
                <BtnSubmit type="submit">{">"}</BtnSubmit>
              </InputContainer>
            </FormSection>
          )}
        </Formik>
        <DataSection>
          <AdressInner>
            1005 Langley Street, <br />
            Victoria, <br />
            BC Canada
          </AdressInner>
          <PhoneNumber href="tel:250-555-2552">250-555-2552</PhoneNumber>
        </DataSection>
        <LinksSection>
          <LinksNav>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </LinksNav>
          <LinksNav>
            <StyledLink to="/">Gift Certificates</StyledLink>
            <StyledLink to="/">Sitemap</StyledLink>
          </LinksNav>
          <IconsContainer>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
          </IconsContainer>
        </LinksSection>
      </FooterDataContainer>
      <CopyRights>
        &copy; 2023 <span>FORTUNE</span>
      </CopyRights>
    </FooterContainer>
  );
};

export default Footer;
