import Masonry from "react-masonry-css";

import { productsList } from "../Constants";
import Pagination from "../PaginationSection";
import { SectionContainer, CardsSection } from "./styles";

const ProductsContent = () => {
  return (
    <SectionContainer>
      <CardsSection>
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Pagination itemsPerPage={16} list={productsList} />
        </Masonry>
      </CardsSection>
    </SectionContainer>
  );
};

export default ProductsContent;
