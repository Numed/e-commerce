import { useContext } from "react";

import {
  HeaderContainer,
  NavList,
  Navigation,
  ListItem,
  Logo,
  StyledLink,
  LinkButton,
} from "./styles";
import { navLinks } from "../../features/Constants";
import { PopupContext } from "../../features/Context";

const Header = () => {
  const { setOpenPopup } = useContext(PopupContext);
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
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
    </HeaderContainer>
  );
};

export default Header;
