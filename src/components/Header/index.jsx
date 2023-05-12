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
  const { setOpenPopup, setClickedLink } = useContext(PopupContext);
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
                  <LinkButton
                    onClick={(e) => (
                      setOpenPopup(true), setClickedLink(e.target.textContent)
                    )}
                  >
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
