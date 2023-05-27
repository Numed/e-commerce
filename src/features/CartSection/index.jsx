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
  ItemMask,
  MaskCount,
  ButtonsContainer,
  ActionButton,
  CartActions,
} from "./styles";
import { CartContext } from "../Context";
import { useHover, onAddItem, onRemoveItem } from "../../helpers";

const CartSection = () => {
  const [total, setTotal] = useState(0);
  const { cartItem, setCartItem } = useContext(CartContext);
  const [isHovered, eventHandlers, hoveredCard] = useHover();

  useEffect(() => {
    getTotalPrice();
    isEmptyCart();
  }, [cartItem]);

  const getTotalPrice = () => {
    if (cartItem.length < 0) return;
    let counter = 0;
    const validPrice = cartItem.map((el) => {
      return (counter = counter + +el.price.substring(1) * el.count);
    });
    setTotal(counter);
  };

  const isEmptyCart = () => {
    if (cartItem.length === 0) {
      localStorage.removeItem("cart");
    }
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
                  <ItemMask {...eventHandlers}>
                    {isHovered && hoveredCard.current?.alt === title ? (
                      <CartActions>
                        <MaskCount>{count}</MaskCount>
                        <ButtonsContainer>
                          <ActionButton
                            className="action-btn"
                            onClick={(e) =>
                              onAddItem(e.target, cartItem, setCartItem)
                            }
                          >
                            +
                          </ActionButton>
                          <ActionButton
                            className="action-btn"
                            onClick={(e) =>
                              onRemoveItem(e.target, cartItem, setCartItem)
                            }
                          >
                            -
                          </ActionButton>
                        </ButtonsContainer>
                      </CartActions>
                    ) : null}
                    <ItemsImg src={img} alt={title} />
                  </ItemMask>
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
          <BtnSubmit to="/checkout">Checkout</BtnSubmit>
        </>
      ) : (
        <EmptyTitle>Cart is empty</EmptyTitle>
      )}
    </CartInner>
  );
};

export default CartSection;
