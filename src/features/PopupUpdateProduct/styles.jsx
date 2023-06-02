import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { Form } from "formik";

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  z-index: 1111;
  display: flex;
  justify-content: flex-end;
  transition: all 0.2s linear;
`;

export const SectionTitle = styled.h3`
  width: 100%;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  padding-bottom: 5px;
  color: #393939;
  border-bottom: 1px solid #dadada;
`;

export const SectionInner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    background: #dadada;
    padding: 20px;
  }
`;

export const FormSection = styled.div`
  width: 50%;
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
  display: inline-block;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const CloseBtn = styled(IoIosClose)`
  color: #393939;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 5%;
  top: 5%;
  cursor: pointer;

  & > svg {
    pointer-events: none;
  }
`;

export const StyledForm = styled(Form)`
  position: relative;
`;
