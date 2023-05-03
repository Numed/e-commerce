import { pathes } from "../../features/Constants";
import { HeaderNavContainer, Title, Cranches, StyledLink } from "./styles";

const HeaderNav = ({ title = "Products" }) => {
  const { path } = pathes.find((el) => el.title === title);
  return (
    <HeaderNavContainer>
      <Title>
        {title === "Error" ? "404 " + title + " — Page Not Found" : title}
      </Title>
      <Cranches>
        <StyledLink to="/">Home</StyledLink>
        {" > "}
        <StyledLink to={path}>{title}</StyledLink>
      </Cranches>
    </HeaderNavContainer>
  );
};

export default HeaderNav;
