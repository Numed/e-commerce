import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../img/logo.webp";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 55px;
  border-bottom: 1px solid #dadada;
`;

export const Logo = styled.img`
  min-width: 122px;
  min-height: 80px;
  background: url(${logo}) no-repeat center;
  background-size: cover;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 20px;
  line-height: 26px;
  text-transform: uppercase;
  margin-bottom: 5px;
  text-align: end;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #393939;
  opacity: 0.9;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;
