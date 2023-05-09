import { useState, useContext } from "react";
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
import NavPopup from "../../../components/NavPopup";
import { PopupContext } from "../../Context";

const Content = () => {
  const [cardList, setCardList] = useState([...mainCardsList]);

  const { isOpenPopup } = useContext(PopupContext);
  const [isHovered, eventHandlers, hoveredCard] = useHover();

  return (
    <>
      <SectionChapter>Featured Products</SectionChapter>
      <CardsSection>
        {isOpenPopup ? <NavPopup /> : null}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <StyledMasonry gutter="30px">
            {cardList.map(({ id, image, title, brand, price, alt }) => {
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
    </>
  );
};

export default Content;
