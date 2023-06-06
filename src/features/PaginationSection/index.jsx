import { useState } from "react";
import ReactPaginate from "react-paginate";
import Masonry from "react-masonry-css";

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
  let counter = 0,
    sliceCurentItems = [];
  if (currentItems.length > 4) {
    for (let i = counter; i < currentItems.length / 4; i++) {
      sliceCurentItems[i] = [...currentItems.slice(counter, counter + 4)];
      counter += 4;
    }
  } else {
    for (let i = counter; i < currentItems.length; i++) {
      sliceCurentItems[i] = [...currentItems.slice(counter, counter + 1)];
      counter += 1;
    }
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    setItemOffset(newOffset);
  };

  const Items = ({ currentItems }) => {
    return (
      <>
        <div className="my-masonry-grid_column">
          {currentItems &&
            currentItems.map(({ id, image, title, brand, price, alt }) => {
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
        </div>
      </>
    );
  };

  return (
    <>
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {sliceCurentItems.map((el, i) => {
          return <Items key={i} currentItems={el} />;
        })}
      </Masonry>
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
