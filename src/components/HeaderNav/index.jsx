import { HeaderNavContainer, Title, Cranches, StyledLink } from "./styles";

const HeaderNav = ({ title = "All" }) => {
  return (
    <HeaderNavContainer>
      <Title>{title}</Title>
      <Cranches>
        <StyledLink to="/">Home</StyledLink>
        {" > "}
        <StyledLink to="/products">All</StyledLink>
      </Cranches>
    </HeaderNavContainer>
  );
};

export default HeaderNav;
