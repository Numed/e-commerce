import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderNavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 175px;
  border-bottom: 1px solid #dadada;
  border-top: 1px solid #dadada;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 1.3px;
  text-transform: uppercase;

  color: #393939;
`;

export const Cranches = styled.div`
  height: auto;
`;

export const StyledLink = styled(Link)`
  font-family: "Karla", sans-serif;
  font-size: 16px;
  line-heigth: 27px;
  font-weigth: 400;
  text-decoration: none;
  color: #393939;
  opacity: 0.9;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;
