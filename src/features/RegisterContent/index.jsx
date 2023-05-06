import { useState } from "react";
import { Formik } from "formik";

import {
  SectionContainer,
  SectionTitle,
  StyledRegionDropdown,
  StyledCountryDropdown,
  FormSection,
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

import { RegisterSchema } from "./validationSchema";

const RegisterContent = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SectionContainer>
      <SectionTitle>Create account</SectionTitle>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirm: "",
          country: "",
          firstName: "",
          lastName: "",
          line1: "",
          line2: "",
          company: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
        }}
        validationSchema={RegisterSchema}
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
              </InputGroup>
              <InputContainer>
                <LabelInner>
                  <FormLabel>
                    Confirm Password <span>*</span>
                  </FormLabel>
                  {errors.confirm && touched.confirm ? (
                    <InputError>{errors.confirm}</InputError>
                  ) : null}
                  <FormInput type="password" name="confirm" required />
                </LabelInner>
              </InputContainer>
            </InputSection>
            <InputSection>
              <InputGroup>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Country <span>*</span>
                    </FormLabel>
                    {errors.country && touched.country ? (
                      <InputError>{errors.country}</InputError>
                    ) : null}
                    <StyledCountryDropdown
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e)}
                      required
                    />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      First Name <span>*</span>
                    </FormLabel>
                    {errors.firstName && touched.firstName ? (
                      <InputError>{errors.firstName}</InputError>
                    ) : null}
                    <FormInput type="text" name="firstName" required />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
              <InputGroup>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Last Name <span>*</span>
                    </FormLabel>
                    {errors.lastName && touched.lastName ? (
                      <InputError>{errors.lastName}</InputError>
                    ) : null}
                    <FormInput type="text" name="lastName" required />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Address Line 1 <span>*</span>
                    </FormLabel>
                    {errors.line1 && touched.line1 ? (
                      <InputError>{errors.line1}</InputError>
                    ) : null}
                    <FormInput type="text" name="line1" required />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
              <InputGroup>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>Address Line 2</FormLabel>
                    {errors.line2 && touched.line2 ? (
                      <InputError>{errors.line2}</InputError>
                    ) : null}
                    <FormInput type="text" name="line2" required />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>Company Name</FormLabel>
                    {errors.company && touched.company ? (
                      <InputError>{errors.company}</InputError>
                    ) : null}
                    <FormInput type="text" name="company" required />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
              <InputGroup>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Suburb/City <span>*</span>
                    </FormLabel>
                    {errors.city && touched.city ? (
                      <InputError>{errors.city}</InputError>
                    ) : null}
                    <FormInput type="text" name="city" required />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      State/Province <span>*</span>
                    </FormLabel>
                    {errors.state && touched.state ? (
                      <InputError>{errors.state}</InputError>
                    ) : null}
                    <StyledRegionDropdown
                      country={country}
                      value={state}
                      onChange={(e) => setState(e)}
                      name="state"
                      required
                    />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
              <InputGroup>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Zip/Postcode <span>*</span>
                    </FormLabel>
                    {errors.zip && touched.zip ? (
                      <InputError>{errors.zip}</InputError>
                    ) : null}
                    <FormInput
                      type="number"
                      name="zip"
                      min="1"
                      max="10000"
                      required
                    />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Phone Number <span>*</span>
                    </FormLabel>
                    {errors.phone && touched.phone ? (
                      <InputError>{errors.phone}</InputError>
                    ) : null}
                    <FormInput type="text" name="phone" required />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
            </InputSection>
            <BtnSubmit>Create account</BtnSubmit>
          </FormSection>
        )}
      </Formik>
    </SectionContainer>
  );
};

export default RegisterContent;
