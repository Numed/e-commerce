import {
  FooterNavContainer,
  LinksContainer,
  StyledLink,
  NavList,
  ListItem,
} from "./styles";
import { navLinks } from "../../features/Constants";

const FooterNav = () => {
  return (
    <FooterNavContainer>
      <LinksContainer>
        <NavList>
          {navLinks.map(({ id, title, path }) => {
            return (
              <ListItem key={id}>
                <StyledLink to={path}>{title}</StyledLink>
              </ListItem>
            );
          })}
        </NavList>
      </LinksContainer>
    </FooterNavContainer>
  );
};

export default FooterNav;
