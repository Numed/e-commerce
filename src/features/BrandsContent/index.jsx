import { useContext } from "react";

import { SectionContainer, CardsSection } from "./styles";
import Pagination from "../PaginationSection";
import { ProductsContext } from "../Context";

const BrandsContent = () => {
  const { products } = useContext(ProductsContext);
  return (
    <SectionContainer>
      <CardsSection>
        <Pagination itemsPerPage={16} list={products} />
      </CardsSection>
    </SectionContainer>
  );
};

export default BrandsContent;
