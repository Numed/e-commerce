import styled from "styled-components";
import { Field } from "formik";

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FormSection = styled.div`
  width: 33.3%;
`;

export const FormTitle = styled.h3`
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 15px;

  color: #393939;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
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

export const LabelInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 15px;
`;

export const FormInput = styled(Field)`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  margin-right: 15px;
  padding: 10px;
  width: 345px;
`;

export const InputError = styled.span`
  font-size: 12px;
  color: #e63946;
  letter-spacing: 1.1px;
  margin-bottom: 5px;
`;

export const InfoSection = styled.div`
  width: 33.3%;
`;

export const InfoTitle = styled(FormTitle)``;

export const InfoSubtitle = styled.h4`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
`;

export const InfoList = styled.ul`
  max-width: 420px;
  height: auto;
  padding-left: 30px;
`;

export const InfoItem = styled.li`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  margin-top: 10px;
`;

export const BtnSubmit = styled.button`
  font-family: "Karla";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.4px;
  background: #393939;
  border: 1px solid #393939;
  border-radius: 3px;
  color: #ffffff;
  padding: 12px 22px;
  cursor: pointer;
  margin-top: 15px;
`;
