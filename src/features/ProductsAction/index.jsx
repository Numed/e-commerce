import { useState, useContext, useRef, useEffect } from "react";
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
import { useHover, findItem } from "../../helpers";
import { notifySuccses, notifyError } from "../../helpers/notify";
import PopupUpdateProduct from "../PopupUpdateProduct";

const ProductsAction = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [idUpdatingProduct, setIdUpdatingProduct] = useState(null);
  const itemsTitle = useRef([]);
  const { products, setProducts } = useContext(ProductsContext);
  const [isHovered, eventHandlers, hoveredCard] = useHover();

  console.log(hoveredCard);

  const { removeProduct } = useRequestService();

  useEffect(() => {
    findItem(searchValue, itemsTitle.current);
  }, [searchValue]);

  const onRemove = (id) => {
    removeProduct(id)
      .then((el) => onRemoved(id, el))
      .catch(onError);
  };

  const onUpdate = (id) => {
    setIsOpenPopup(true);
    setIdUpdatingProduct(id);
  };

  const onRemoved = (id, data) => {
    const filterProducts = products.filter((el) => el.id !== id);
    setProducts([...filterProducts]);
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
                    <CardTitle ref={(el) => (itemsTitle.current[id] = el)}>
                      {title}
                    </CardTitle>
                    <CardPrice>{price}</CardPrice>
                  </CardTextContainer>
                </Card>
              );
            })}
          </Masonry>
        </CardsSections>
      </SectionInner>
      {isOpenPopup ? (
        <PopupUpdateProduct
          id={idUpdatingProduct}
          setId={setIdUpdatingProduct}
          setIsOpenPopup={setIsOpenPopup}
        />
      ) : null}
    </SectionContainer>
  );
};

export default ProductsAction;
