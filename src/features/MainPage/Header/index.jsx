import { useContext } from "react";
import { Pagination, Navigation as Nav, Parallax, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  StyledSwiper,
  StyledSlide,
  SlideTextContainer,
  SlideTitle,
  SlideSubtitle,
  HeaderContainer,
  StyledLink,
  Logo,
  NavList,
  ListItem,
  Navigation,
  HeaderInner,
  LinkButton,
} from "./styles";
import { headerImages, navLinks } from "../../Constants";
import { PopupContext } from "../../../features/Context";

const MainPageHeader = () => {
  const { setOpenPopup } = useContext(PopupContext);
  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <Logo to="/" />
          <Navigation>
            <NavList>
              {navLinks.map(({ id, title, path, isButton }) => {
                return (
                  <ListItem key={id}>
                    {isButton === true ? (
                      <LinkButton onClick={() => setOpenPopup(true)}>
                        {title}
                      </LinkButton>
                    ) : (
                      <StyledLink to={path} onClick={() => setOpenPopup(false)}>
                        {title}
                      </StyledLink>
                    )}
                  </ListItem>
                );
              })}
            </NavList>
          </Navigation>
        </HeaderInner>
      </HeaderContainer>
      <StyledSwiper
        style={{
          "--swiper-navigation-color": "#6f6f6f",
          "--swiper-pagination-color": "#5b5b5b",
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Nav]}
        className="mySwiper"
      >
        {headerImages.map(({ id, image, alt, title, subtitle }) => {
          return (
            <StyledSlide key={id}>
              <img className="swiper-image" src={image} alt={alt} />
              <SlideTextContainer>
                <SlideTitle className="title" data-swiper-parallax="-300">
                  {title}
                </SlideTitle>
                <SlideSubtitle className="subtitle" data-swiper-parallax="-200">
                  {subtitle}
                </SlideSubtitle>
              </SlideTextContainer>
            </StyledSlide>
          );
        })}
      </StyledSwiper>
    </>
  );
};

export default MainPageHeader;
