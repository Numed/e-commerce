import styled from "styled-components";
import { Field } from "formik";

export const InputSection = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #dadada;
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
  outline-color: #8abdf9;
  font-family: "Karla";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #6f6f6f;
`;

export const InputError = styled.span`
  font-size: 12px;
  color: #e63946;
  letter-spacing: 1.1px;
  margin-bottom: 5px;
  font-family: "Karla";
  font-weight: 400;
  line-height: 17px;
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
  opacity: 0.8;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;
