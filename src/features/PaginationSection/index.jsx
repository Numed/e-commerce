import { useState } from "react";
import ReactPaginate from "react-paginate";

import { useHover } from "../../helpers";
import {
  Card,
  CardBrand,
  CardPrice,
  CardImg,
  CardTextContainer,
  CardTitle,
  CardMask,
  ActionButton,
  CardActions,
} from "../../styles";

const Pagination = ({ itemsPerPage, list }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const [isHovered, eventHandlers, hoveredCard] = useHover();

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = list.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(list.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    setItemOffset(newOffset);
  };

  const Items = ({ currentItems }) => {
    return (
      <>
        {currentItems &&
          currentItems.map(({ id, image, title, brand, price, alt }) => {
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
      </>
    );
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </>
  );
};

export default Pagination;
