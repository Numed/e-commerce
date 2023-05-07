import { useRef, useState } from "react";
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

const ProductsContent = () => {
  const cardsRef = useRef([]);
  const [isHovered, setHovered] = useState(false);
  const hoveredCard = useRef(null);

  const onHover = (target) => {
    setHovered(true);
    hoveredCard.current = target;
    console.log(hoveredCard.current);
  };

  const removeHover = () => {
    setHovered(false);
    hoveredCard.current = null;
  };

  return (
    <SectionContainer>
      <CardsSection>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <StyledMasonry gutter="10px">
            {productsList.map(({ id, image, title, brand, price, alt }) => {
              return (
                <Card
                  key={id}
                  ref={(el) => (cardsRef.current[id] = el)}
                  onMouseOver={(e) => onHover(e.target)}
                  onMouseOut={(e) => removeHover(e.target)}
                >
                  {isHovered &&
                  hoveredCard.current?.children[0]?.alt === title ? (
                    <CardMask>
                      <CardActions>
                        <ActionButton>Choose option</ActionButton>
                      </CardActions>
                      <CardImg src={image} alt={alt} />
                    </CardMask>
                  ) : (
                    <CardImg src={image} alt={alt} />
                  )}
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

export default ProductsContent;
