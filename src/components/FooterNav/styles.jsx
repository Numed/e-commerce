import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterNavContainer = styled.div`
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  width: 100%;
  height: auto;
  padding: 25px 175px;
`;

export const LinksContainer = styled.div`
  width: 100%;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  font-size: 20px;
  line-height: 26px;
  text-transform: uppercase;
  margin-right: 15px;
  text-align: end;
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

export const LinkButton = styled.a`
  font-family: "Karla", sans-serif;
  font-size: 16px;
  line-heigth: 27px;
  font-weigth: 400;
  text-decoration: none;
  color: #393939;
  opacity: 0.9;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
