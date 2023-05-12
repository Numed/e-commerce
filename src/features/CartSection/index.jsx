import { useState } from "react";

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
} from "./styles";

const CartSection = () => {
  return (
    <CartInner>
      <CartCurrencyTitle>Currency: USD</CartCurrencyTitle>
      <ItemsContainer>
        <ItemInner>
          <ItemsImg />
          <ItemText>
            <ItemTitle>Box Leg Table</ItemTitle>
            <ItemCount>1 x $3,080.00</ItemCount>
          </ItemText>
        </ItemInner>
        <TotalContainter>
          <TotalTitle>Subtotal:</TotalTitle>
          <TotalPrice>$3,080.00</TotalPrice>
        </TotalContainter>
      </ItemsContainer>
      <BtnSubmit>Checkout</BtnSubmit>
    </CartInner>
  );
};

export default CartSection;
