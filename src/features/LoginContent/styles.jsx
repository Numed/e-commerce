import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 788px) {
    padding: 0 20px;
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FormSection = styled.div`
  width: 33.3%;
  @media (max-width: 788px) {
    width: 65%;
  }
  @media (max-width: 430px) {
    width: 100%;
  }
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

export const InfoSection = styled.div`
  width: 33.3%;
  @media (max-width: 430px) {
    display: none;
  }
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
  display: inline-block;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const BtnRegister = styled(Link)`
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
