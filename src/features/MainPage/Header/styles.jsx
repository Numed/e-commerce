import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import logo from "../../../img/logo.webp";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const HeaderInner = styled.div`
  position: absolute;
  z-index: 111;
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  @media (max-width: 788px) {
    padding: 0 30px;
  }
`;

export const Logo = styled(Link)`
  min-width: 122px;
  min-height: 80px;
  background: url(${logo}) no-repeat center;
  background-size: cover;
  text-decoration: none;

  @media (max-width: 430px) {
    transform: scale(0.75);
  }
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

  @media (max-width: 430px) {
    font-size: 1em;
    font-weight: 700;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #393939;
  opacity: 0.8;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
  color: #393939;
  opacity: 0.8;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const StyledSwiper = styled(Swiper)`
  height: 650px;

  @media (max-width: 788px) {
    height: 300px;
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  & > img {
    width: 100%;
    max-height: 450px;
    object-fit: cover;

    @media (max-width: 788px) {
      height: 300px;
    }
  }
`;

export const SlideTextContainer = styled.div`
  margin: 40px 25px;

  @media (max-width: 788px) {
    height: 0;
  }
`;

export const SlideTitle = styled.h3`
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #6f6f6f;
  margin-bottom: 25px;
`;

export const SlideSubtitle = styled.h4`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #6f6f6f;
  max-width: 880px;
`;
