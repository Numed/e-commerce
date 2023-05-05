import styled from "styled-components";
import { Field } from "formik";

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 50px 0;
  padding: 0 150px;
`;

export const SectionInner = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: flex-start;
  flex-direction: row-reverse;
  width: 100%;
`;

export const ContentText = styled.p`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  max-width: 750px;
  color: #6f6f6f;
  margin-bottom: 20px;
`;

export const FormSection = styled.div`
  width: 30%;
  height: auto;
`;

export const FormLabel = styled.label`
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.7px;
  color: #6f6f6f;
  margin-bottom: 5px;

  & span {
    color: #d93838;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const LabelInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FormInput = styled(Field)`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  margin-right: 15px;
  padding: 10px;
  width: 345px;
`;

export const FormTextarea = styled.textarea`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  margin-right: 15px;
  padding: 10px;
  width: 705px;
  height: 150px;
  resize: vertical;
`;

export const FormSubmitBtn = styled.button`
  background: #393939;
  border: 1px solid #393939;
  border-radius: 3px;
  padding: 10px 25px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 15px;
  letter-spacing: 1.4px;
  font-family: "Karla";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

export const InputError = styled.span`
  font-size: 12px;
  color: #e63946;
  letter-spacing: 1.1px;
  margin-bottom: 5px;
`;
