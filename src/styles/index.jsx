import styled from "styled-components";
import { Field } from "formik";
import { Link } from "react-router-dom";

export const InputSection = styled.div`
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

  &.single-field {
    width: 95%;
  }
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

  .single-field > & {
    width: 100%;
  }
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

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 20px;
  background: #fff;
  cursor: pointer;
  text-decoration: none;
`;

export const CardMask = styled.div`
  position: relative;
  transition: all 0.25s linear;
`;

export const CardActions = styled.div`
  background-color: none;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  transition: all 0.25s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const ActionButton = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-bottom: 1px solid #eee;
    opacity: 0;
    transition: all 0.25s linear;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  object-fit: contain;
  pointer-events: none;
  display: block;
`;

export const CardTextContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardBrand = styled.h5`
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: #6f6f6f;
`;

export const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #393939;
  margin-bottom: 10px;
`;

export const CardPrice = styled.span`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #6f6f6f;
`;
