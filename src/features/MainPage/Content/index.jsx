import { ResponsiveMasonry } from "react-responsive-masonry";

import { mainCardsList } from "../../../features/Constants";
import {
  Card,
  CardBrand,
  CardPrice,
  CardImg,
  CardTextContainer,
  CardTitle,
  CardsSection,
  SectionChapter,
  StyledMasonry,
} from "./styles";

const Content = () => {
  return (
    <>
      <SectionChapter>Featured Products</SectionChapter>
      <CardsSection>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <StyledMasonry gutter="10px">
            {mainCardsList.map(({ id, image, title, brand, price, alt }) => {
              return (
                <Card key={id}>
                  <CardImg src={image} alt={alt} />
                  <CardTextContainer>
                    <CardBrand>{brand}</CardBrand>
                    <CardTitle>{title}</CardTitle>
                    <CardPrice>{price}</CardPrice>
                  </CardTextContainer>
                </Card>
              );
            })}
          </StyledMasonry>
        </ResponsiveMasonry>
      </CardsSection>
    </>
  );
};

export default Content;
