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

const Header = () => {
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
                  <LinkButton>{title}</LinkButton>
                ) : (
                  <StyledLink to={path}>{title}</StyledLink>
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
