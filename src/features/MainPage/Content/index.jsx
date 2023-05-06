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
import { useHttp } from "../../../hooks/http.hooks";

const Content = () => {
  const { useHover } = useHttp();
  const [hoverRef, isHovered] = useHover();

  return (
    <>
      <SectionChapter>Featured Products</SectionChapter>
      <CardsSection>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <StyledMasonry gutter="10px">
            {mainCardsList.map(({ id, image, title, brand, price, alt }) => {
              return (
                <Card key={id} ref={hoverRef}>
                  {isHovered ? (
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
