import { useState, useEffect } from "react";
import { Formik, Form, useFormik } from "formik";
import jwt_decode from "jwt-decode";

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
import useRequestService from "../../service";
import { notifyError, notifySuccses } from "../../helpers/notify";

const CheckoutContent = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    company: "",
    city: "",
    zip: "",
    phone: "",
  });
  const { getUserInfo, createOrder } = useRequestService();

  useEffect(() => {
    onCheckUser();
  }, []);

  const onSubmit = (data) => {
    console.log("Enter");
    createOrder(data).then(onCreate).catch(onError);
  };

  const onCheckUser = () => {
    if (localStorage.getItem("token") !== null) {
      getUserInfo(jwt_decode(localStorage.getItem("token")).user_id)
        .then(onResolve)
        .catch(onError);
    }
  };

  const onCreate = (data) => {
    notifySuccses(data.message);
  };

  const onResolve = (data) => {
    setUserInfo({
      first_name: data.first_name,
      last_name: data.last_name,
      address1: data.address1,
      address2: data.address2,
      company: data.company,
      city: data.city,
      zip: data.zip,
      phone: data.phone,
    });
  };

  const onError = (data) => {
    notifyError(data.message);
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
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <FormSection>
            <Form>
              <InputSection>
                <InputContainer>
                  <LabelInner className="single-field">
                    <FormLabel>
                      Country <span>*</span>
                    </FormLabel>
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
                    <FormInput type="text" name="line2" />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner className="single-field">
                    <FormLabel>Company Name(optional)</FormLabel>
                    {errors.company && touched.company ? (
                      <InputError>{errors.company}</InputError>
                    ) : null}
                    <FormInput type="text" name="company" />
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
                        max="100000"
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
              <BtnSubmit type="submit">Create order</BtnSubmit>
            </Form>
          </FormSection>
        )}
      </Formik>
    </SectionContainer>
  );
};

export default CheckoutContent;
