import {
  SectionContainer,
  SectionTitle,
  StyledLink,
  LinksList,
} from "./styles";

const PageSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Pages</SectionTitle>
      <LinksList>
        <StyledLink to="/info">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </LinksList>
    </SectionContainer>
  );
};

export default PageSection;
