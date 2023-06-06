import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { SectionContainer, CardsSection } from "./styles";
import Pagination from "../PaginationSection";
import { ProductsContext } from "../Context";

const BrandsContent = () => {
  const { brandTitle } = useParams();
  const { products } = useContext(ProductsContext);
  const [brandName, setBrandName] = useState(brandTitle);
  const [filteredBrands, setFiltedBrands] = useState(
    products.filter((el) => el.brand === brandName)
  );

  useEffect(() => {
    onSet(brandTitle);
    // eslint-disable-next-line
  }, [brandTitle]);

  const onSet = (brand) => {
    setBrandName(brandTitle);
    setFiltedBrands(products.filter((el) => el.brand === brand));
  };

  return (
    <SectionContainer>
      <CardsSection>
        <Pagination itemsPerPage={16} list={filteredBrands} />
      </CardsSection>
    </SectionContainer>
  );
};

export default BrandsContent;
