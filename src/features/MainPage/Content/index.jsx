import { useRef } from "react";
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
  CardMask,
  ActionButton,
  CardActions,
} from "./styles";
import { useHover } from "../../../helpers";

const Content = () => {
  const cardsRef = useRef([]);
  // const hoveredCard = useRef(null);
  const [hovered, eventHandlers, hoveredCard] = useHover();

  return (
    <>
      <SectionChapter>Featured Products</SectionChapter>
      <CardsSection>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <StyledMasonry gutter="30px">
            {mainCardsList.map(({ id, image, title, brand, price, alt }) => {
              return (
                <Card
                  key={id}
                  ref={(el) => (cardsRef.current[id] = el)}
                  {...eventHandlers}
                >
                  {hovered &&
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
    </>
  );
};

export default Content;
