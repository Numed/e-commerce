import { useState, useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Masonry from "react-masonry-css";

import {
  SectionContainer,
  SectionTitle,
  SectionInner,
  SearchSection,
  Input,
  InputInner,
  CardsSections,
  CardActions,
  CardEdit,
  CardRemove,
  CardMask,
  Card,
  CardBrand,
  CardImg,
  CardPrice,
  CardTextContainer,
  CardTitle,
} from "./styles";
import { ProductsContext } from "../Context";
import useRequestService from "../../service";
import { useHover } from "../../helpers";
import { notifySuccses, notifyError, notifyUpdate } from "../../helpers/notify";

const ProductsAction = () => {
  const [searchValue, setSearchValue] = useState("");
  const { products, setProducts } = useContext(ProductsContext);
  const [isHovered, eventHandlers, hoveredCard] = useHover();

  const { updateProduct, removeProduct } = useRequestService();

  const onRemove = (id) => {
    removeProduct(id).then(onRemoved).catch(onError);
  };

  const onUpdate = (id) => {
    let updatedData = {};
    updateProduct(id, updatedData).then(onResolve).onError(onError);
  };

  const onResolve = (data) => {
    const filterProducts = products.filter((el) => el.id !== data.id);
    setProducts([...filterProducts, data]);
    notifyUpdate(data.message);
  };

  const onRemoved = (data) => {
    notifySuccses(data.message);
  };

  const onError = (data) => {
    notifyError(data.messa);
  };

  return (
    <SectionContainer>
      <SectionTitle>Product Actions</SectionTitle>
      <SectionInner>
        <SearchSection>
          <InputInner>
            <Input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="enter title of product"
            />
          </InputInner>
        </SearchSection>
        <CardsSections>
          <Masonry
            breakpointCols={{ default: 4, 950: 3, 700: 2, 350: 1 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {products.map(({ id, image, alt, brand, title, price }) => {
              return (
                <Card key={id}>
                  <CardMask {...eventHandlers}>
                    {isHovered &&
                    hoveredCard.current?.children[0]?.alt === title ? (
                      <CardActions>
                        <CardEdit onClick={() => onUpdate(id)}>
                          <MdEdit /> Update product
                        </CardEdit>
                        <CardRemove onClick={() => onRemove(id)}>
                          <MdDelete />
                          Remove product
                        </CardRemove>
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
        </CardsSections>
      </SectionInner>
    </SectionContainer>
  );
};

export default ProductsAction;
