import { SectionContainer, CardsSection } from "./styles";
import Pagination from "../PaginationSection";
import { productsList } from "../Constants";

const BrandsContent = () => {
  return (
    <SectionContainer>
      <CardsSection>
        <Pagination itemsPerPage={16} list={productsList} />
      </CardsSection>
    </SectionContainer>
  );
};

export default BrandsContent;
