import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const FooterDataContainer = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSection = styled.div`
  width: 30%;
  height: auto;
`;

export const FormTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #393939;
  margin-bottom: 25px;
`;

export const FormSubtitle = styled.h4`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  margin-bottom: 25px;
`;

export const DataSection = styled.div`
  width: 20%;
  height: auto;
  margin-left: 30px;
`;

export const AdressInner = styled.p`
  min-width: 150px;
  min-height: 75px;
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  margin-bottom: 20px;
`;

export const PhoneNumber = styled.a`
  text-decoration: none;
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  opacity: 0.9;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const LinksSection = styled.div`
  width: 30%;
  height: auto;
  margin-left: 30px;
`;

export const LinksNav = styled.ul`
  list-style: none;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  font-family: "Karla";
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #393939;
  opacity: 0.9;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const IconsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    width: 25px;
    height: 16px;
    filter: invert(40%) sepia(0%) saturate(1199%) hue-rotate(144deg)
      brightness(106%) contrast(80%);
  }
`;

export const CopyRights = styled.p`
  font-family: "Karla";
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #6f6f6f;
  padding-left: 120px;
  margin-top: 80px;

  span {
    font-family: "Karla";
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #393939;
  }
`;
