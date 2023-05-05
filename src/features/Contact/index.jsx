import { Formik } from "formik";

import {
  SectionContainer,
  SectionInner,
  FormInput,
  FormLabel,
  FormSubmitBtn,
  InputContainer,
  InputError,
  LabelInner,
  ContentText,
  FormSection,
  InputGroup,
} from "./styles";
import PageSection from "../../components/PageSection";
import { ContactSchema } from "./validationSchema";
import { FormikTextarea } from "../../helpers";

const ContactContent = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SectionContainer>
      <ContentText>
        Want your customers to be able to get in touch with you easily? This
        clean, simple form does just that.
      </ContentText>
      <SectionInner>
        <PageSection />
        <Formik
          initialValues={{
            email: "",
            name: "",
            phone: "",
            orderNumber: "",
            question: "",
          }}
          validationSchema={ContactSchema}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <FormSection>
              <InputGroup>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Full Name <span>*</span>
                    </FormLabel>
                    {errors.name && touched.name ? (
                      <InputError>{errors.name}</InputError>
                    ) : null}
                    <FormInput
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>
                      Email Address <span>*</span>
                    </FormLabel>
                    {errors.email && touched.email ? (
                      <InputError>{errors.email}</InputError>
                    ) : null}
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
              <InputGroup>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>Phone Number</FormLabel>
                    {errors.phone && touched.phone ? (
                      <InputError>{errors.phone}</InputError>
                    ) : null}
                    <FormInput
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </LabelInner>
                </InputContainer>
                <InputContainer>
                  <LabelInner>
                    <FormLabel>Order Number</FormLabel>
                    {errors.orderNumber && touched.orderNumber ? (
                      <InputError>{errors.orderNumber}</InputError>
                    ) : null}
                    <FormInput
                      type="text"
                      name="orderNumber"
                      placeholder="Order Number"
                      required
                    />
                  </LabelInner>
                </InputContainer>
              </InputGroup>
              <InputContainer>
                <LabelInner>
                  <FormLabel>
                    Comments/Questions <span>*</span>
                  </FormLabel>
                  {errors.question && touched.question ? (
                    <InputError>{errors.question}</InputError>
                  ) : null}
                  <FormikTextarea name="question" required />
                </LabelInner>
              </InputContainer>
              <FormSubmitBtn>Submit Message</FormSubmitBtn>
            </FormSection>
          )}
        </Formik>
      </SectionInner>
    </SectionContainer>
  );
};

export default ContactContent;
