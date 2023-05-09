import { useContext } from "react";

import {
  FooterNavContainer,
  LinksContainer,
  StyledLink,
  NavList,
  ListItem,
  LinkButton,
} from "./styles";
import { navLinks } from "../../features/Constants";
import { PopupContext } from "../../features/Context";

const FooterNav = () => {
  const { setOpenPopup } = useContext(PopupContext);
  return (
    <FooterNavContainer>
      <LinksContainer>
        <NavList>
          {navLinks.map(({ id, title, path, isButton }) => {
            return (
              <ListItem key={id}>
                {isButton === true ? (
                  <LinkButton onClick={() => setOpenPopup(true)}>
                    {title}
                  </LinkButton>
                ) : (
                  <StyledLink to={path}>{title}</StyledLink>
                )}
              </ListItem>
            );
          })}
        </NavList>
      </LinksContainer>
    </FooterNavContainer>
  );
};

export default FooterNav;
