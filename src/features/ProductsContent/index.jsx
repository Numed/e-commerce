import { useContext } from "react";

import Pagination from "../PaginationSection";
import { SectionContainer, CardsSection } from "./styles";
import { ProductsContext } from "../Context";

const ProductsContent = () => {
  const { products } = useContext(ProductsContext);
  return (
    <SectionContainer>
      <CardsSection>
        <Pagination itemsPerPage={16} list={products} />
      </CardsSection>
    </SectionContainer>
  );
};

export default ProductsContent;
