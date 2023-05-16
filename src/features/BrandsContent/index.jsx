import { useState } from "react";
import Masonry from "react-masonry-css";

import { SectionContainer, CardsSection, StyledMasonry } from "./styles";
import Pagination from "../PaginationSection";
import { productsList } from "../Constants";

const BrandsContent = () => {
  const [slicedList, setSlicedList] = useState([]);
  const [startPosition, setStartPosition] = useState(0);
  const [count, setCount] = useState(4);

  const onSliced = () => {
    for (let i = startPosition; i <= productsList.length; i++) {
      setSlicedList([...slicedList, productsList.slice(startPosition, count)]);
      setStartPosition(startPosition + 4);
      setCount(count + 4);
    }
    return slicedList.map((el, i) => (
      <Pagination key={i} itemsPerPage={16} list={el} />
    ));
  };

  return (
    <SectionContainer>
      <CardsSection>
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* <Pagination itemsPerPage={16} list={productsList} /> */}
          {onSliced()}
        </Masonry>
      </CardsSection>
    </SectionContainer>
  );
};

export default BrandsContent;
