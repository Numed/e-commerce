import { useState } from "react";
import { ResponsiveMasonry } from "react-responsive-masonry";

import { productsList } from "../Constants";
import {
  SectionContainer,
  Card,
  CardBrand,
  CardPrice,
  CardImg,
  CardTextContainer,
  CardTitle,
  CardsSection,
  StyledMasonry,
  CardMask,
  ActionButton,
  CardActions,
} from "./styles";
import { useHover } from "../../helpers";

const BrandsContent = () => {
  const [brands, setBrands] = useState([...productsList]);
  const [isHovered, eventHandlers, hoveredCard] = useHover();

  return (
    <SectionContainer>
      <CardsSection>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <StyledMasonry gutter="30px">
            {brands.map(({ id, image, title, brand, price, alt }) => {
              return (
                <Card key={id}>
                  <CardMask {...eventHandlers}>
                    {isHovered &&
                    hoveredCard.current?.children[0]?.alt === title ? (
                      <CardActions>
                        <ActionButton>Choose option</ActionButton>
                      </CardActions>
                    ) : null}
                    <CardImg src={image} alt={alt} />
                  </CardMask>
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
    </SectionContainer>
  );
};

export default BrandsContent;
