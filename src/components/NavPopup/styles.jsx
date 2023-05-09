import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const NavLinks = styled.ul`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-start;
  flex-direction: column;
  list-style: none;
  width: 20%;
  padding: 10px 15px;
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
  color: #fff;
  opacity: 0.3;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
  color: #fff;
  opacity: 0.3;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const PopupMenu = styled.div`
  background: #fff;
  height: 100%;
  width: 20%;
  transition: all 0.2s linear;
  transform: translate(0, 0);
  opacity: 0;
  animation: animate 0.1s ease-in-out 1;
  animation-fill-mode: forwards;

  @keyframes animate {
    0% {
      transform: translate(250px, 0);
    }

    50% {
      transform: translate(100px, 0);
    }

    100% {
      background: #fff;
      opacity: 1;
    }
  }
`;
