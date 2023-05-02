import {
  HeaderContainer,
  NavList,
  Navigation,
  ListItem,
  Logo,
  StyledLink,
} from "./styles";
import { navLinks } from "../../features/Constants";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <Navigation>
        <NavList>
          {navLinks.map(({ id, title, path }) => {
            return (
              <ListItem key={id}>
                <StyledLink to={path}>{title}</StyledLink>
              </ListItem>
            );
          })}
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
