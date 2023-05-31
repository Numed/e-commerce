import { useState, useRef, useMemo } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const hoveredCard = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      // eslint-disable-next-line
      onMouseOver: (e) => (setHovered(true), (hoveredCard.current = e.target)),
      // eslint-disable-next-line
      onMouseOut: () => (setHovered(false), (hoveredCard.current = null)),
    }),
    [setHovered]
  );

  return [hovered, eventHandlers, hoveredCard];
};

export const onAddItem = (target, cartItem, setCartItem) => {
  const filterCart = cartItem.filter((el) => {
    return (
      el.title ===
      target.parentElement.parentElement.parentElement.lastElementChild.alt
    );
  })[0];
  const updateOrder = {
    ...filterCart,
    count: filterCart.count + 1,
  };
  setCartItem([
    ...cartItem.map((el) => {
      return el === filterCart ? (el = updateOrder) : el;
    }),
  ]);
};

export const onRemoveItem = (target, cartItem, setCartItem) => {
  const filterCart = cartItem.filter((el) => {
    return (
      el.title ===
      target.parentElement.parentElement.parentElement.lastElementChild.alt
    );
  })[0];

  const updateOrder = {
    ...filterCart,
    count: filterCart.count - 1,
  };

  if (updateOrder.count === 0) {
    return setCartItem([...cartItem.filter((el) => el !== filterCart)]);
  }
  setCartItem([
    ...cartItem.map((el) => {
      return el === filterCart ? (el = updateOrder) : el;
    }),
  ]);
};

export const findItem = (searchTerm, itemsName) => {
  if (searchTerm !== "") {
    itemsName.forEach((e) => {
      if (e.textContent.toLowerCase().search(searchTerm) === -1) {
        e.parentElement.parentElement.classList.add("hide");
      } else {
        e.parentElement.parentElement.classList.remove("hide");
      }
    });
  } else {
    itemsName.forEach((e) => {
      e.parentElement.parentElement.classList.remove("hide");
    });
  }
};
