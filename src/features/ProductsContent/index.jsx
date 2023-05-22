import { productsList } from "../Constants";
import Pagination from "../PaginationSection";

import { SectionContainer, CardsSection } from "./styles";

const ProductsContent = () => {
  return (
    <SectionContainer>
      <CardsSection>
        <Pagination itemsPerPage={16} list={productsList} />
      </CardsSection>
    </SectionContainer>
  );
};

export default ProductsContent;
