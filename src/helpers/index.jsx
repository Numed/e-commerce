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
