import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import {
  SectionContainer,
  BtnSubmit,
  InfoDescription,
  InfoPrice,
  Input,
  CardInfo,
  CardPhotos,
  InputContainer,
  Label,
  MainPhoto,
} from "./styles";
import Spinner from "../../components/Spinner";
import { CartContext, ProductsContext } from "../../features/Context";

const CardContent = () => {
  const { cardId } = useParams();
  const [cardInfo, setCardInfo] = useState({});
  const [mainImg, setMainImg] = useState(null);
  const [isAdding, setAdding] = useState(false);
  const [count, setCount] = useState(1);

  const { cartItem, setCartItem } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    setCardInfo(products.filter((el) => el.id === +cardId)[0]);
    setMainImg(cardInfo.image);
    // eslint-disable-next-line
  }, [cardId, cardInfo]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = () => {
    setAdding(true);
    setCartItem([
      ...cartItem,
      {
        title: cardInfo.title,
        img: cardInfo.image,
        count,
        price: cardInfo.price,
      },
    ]);
    setAdding(false);
  };

  return (
    <SectionContainer>
      <CardInfo>
        <InfoPrice>{cardInfo.price}</InfoPrice>
        <InfoDescription>
          {cardInfo.description !== ""
            ? cardInfo.description
            : `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`}
        </InfoDescription>
        <InputContainer>
          <Label>Quantity</Label>
          <Input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </InputContainer>
        <BtnSubmit disabled={isAdding} onClick={() => addToCart()}>
          {isAdding ? <Spinner /> : null}Add to Cart
        </BtnSubmit>
      </CardInfo>
      <CardPhotos>
        <MainPhoto src={mainImg} alt="Main photo" />
      </CardPhotos>
    </SectionContainer>
  );
};

export default CardContent;
