import {
  FooterNavContainer,
  LinksContainer,
  StyledLink,
  NavList,
  ListItem,
  LinkButton,
} from "./styles";
import { navLinks } from "../../features/Constants";

const FooterNav = () => {
  return (
    <FooterNavContainer>
      <LinksContainer>
        <NavList>
          {navLinks.map(({ id, title, path, isButton }) => {
            return (
              <ListItem key={id}>
                {isButton === true ? (
                  <LinkButton>{title}</LinkButton>
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
