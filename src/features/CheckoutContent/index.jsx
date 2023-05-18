import { useState, useContext } from "react";
import { Formik } from "formik";

import {
  SectionContainer,
  StyledRegionDropdown,
  StyledCountryDropdown,
  FormSection,
  SectionSubtitle,
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
import { ShippingSchema } from "./validationSchema";

const CheckoutContent = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SectionContainer>
      <SectionSubtitle>Shipping Address</SectionSubtitle>
      <Formik
        initialValues={{
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
        validationSchema={ShippingSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <FormSection>
            <InputSection>
              <InputContainer>
                <LabelInner className="single-field">
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
              <InputGroup>
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
              </InputGroup>
              <InputGroup>
                <InputContainer>
                  <LabelInner className="single-field">
                    <FormLabel>
                      Address <span>*</span>
                    </FormLabel>
                    {errors.line1 && touched.line1 ? (
                      <InputError>{errors.line1}</InputError>
                    ) : null}
                    <FormInput type="text" name="line1" required />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
              <InputContainer>
                <LabelInner className="single-field">
                  <FormLabel>Appartments/Suite/Building(optional)</FormLabel>
                  {errors.line2 && touched.line2 ? (
                    <InputError>{errors.line2}</InputError>
                  ) : null}
                  <FormInput type="text" name="line2" required />
                </LabelInner>
              </InputContainer>
              <InputContainer>
                <LabelInner className="single-field">
                  <FormLabel>Company Name(optional)</FormLabel>
                  {errors.company && touched.company ? (
                    <InputError>{errors.company}</InputError>
                  ) : null}
                  <FormInput type="text" name="company" required />
                </LabelInner>
              </InputContainer>
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
                      Postal Code <span>*</span>
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
            <BtnSubmit>Create order</BtnSubmit>
          </FormSection>
        )}
      </Formik>
    </SectionContainer>
  );
};

export default CheckoutContent;
