import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionContainer = styled.div`
  width: 305px;
  height: auto;
`;

export const SectionTitle = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #393939;
  border-bottom: 1px solid #dadada;
  padding-bottom: 10px;
`;

export const LinksList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  margin-top: 10px;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;
