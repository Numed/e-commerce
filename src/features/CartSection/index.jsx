import { useState, useContext, useEffect } from "react";

import {
  CartInner,
  CartCurrencyTitle,
  ItemsContainer,
  ItemsImg,
  ItemTitle,
  ItemCount,
  TotalPrice,
  TotalTitle,
  BtnSubmit,
  ItemInner,
  ItemText,
  TotalContainter,
  EmptyTitle,
} from "./styles";
import { CartContext } from "../Context";

const CartSection = () => {
  const [total, setTotal] = useState(0);
  const { cartItem, setCartItem } = useContext(CartContext);

  useEffect(() => {
    getTotalPrice();
  }, [cartItem]);

  const getTotalPrice = () => {
    let counter = 0;
    const validPrice = cartItem.map((el) => {
      return (counter = counter + +el.price.slice(1) * el.count);
    });
    setTotal(counter);
  };

  return (
    <CartInner>
      <CartCurrencyTitle>Currency: USD</CartCurrencyTitle>
      {cartItem.length > 0 ? (
        <>
          <ItemsContainer>
            {cartItem.map(({ title, img, count, price }, i) => {
              return (
                <ItemInner key={i}>
                  <ItemsImg src={img} alt={title} />
                  <ItemText>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemCount>
                      {count} x {price}
                    </ItemCount>
                  </ItemText>
                </ItemInner>
              );
            })}
          </ItemsContainer>
          <TotalContainter>
            <TotalTitle>Subtotal:</TotalTitle>
            <TotalPrice>${total}</TotalPrice>
          </TotalContainter>
          <BtnSubmit>Checkout</BtnSubmit>
        </>
      ) : (
        <EmptyTitle>Cart is empty</EmptyTitle>
      )}
    </CartInner>
  );
};

export default CartSection;
