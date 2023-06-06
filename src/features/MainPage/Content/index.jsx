import { useState, useContext } from "react";

import {
  Card,
  CardBrand,
  CardPrice,
  CardImg,
  CardTextContainer,
  CardTitle,
  CardsSection,
  SectionChapter,
  CardMask,
  ActionButton,
  CardActions,
} from "./styles";
import { useHover } from "../../../helpers";
import NavPopup from "../../../components/NavPopup";
import { PopupContext, ProductsContext } from "../../Context";
import Masonry from "react-masonry-css";

const Content = () => {
  const { products } = useContext(ProductsContext);
  const [cardList] = useState([...products.slice(0, 9)]);

  const { isOpenPopup } = useContext(PopupContext);
  const [isHovered, eventHandlers, hoveredCard] = useHover();

  return (
    <>
      <SectionChapter>Featured Products</SectionChapter>
      <CardsSection>
        {isOpenPopup ? <NavPopup /> : null}
        <Masonry
          breakpointCols={{ default: 3, 700: 2, 350: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {cardList.map(({ id, image, title, brand, price, alt }) => {
            return (
              <Card key={id}>
                <CardMask {...eventHandlers}>
                  {isHovered &&
                  hoveredCard.current?.children[0]?.alt === title ? (
                    <CardActions>
                      <ActionButton to={`/products/${id}`}>
                        Choose option
                      </ActionButton>
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
        </Masonry>
      </CardsSection>
    </>
  );
};

export default Content;
