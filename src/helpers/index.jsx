import { useState, useMemo, useRef } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const hoveredCard = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      onMouseOver: (e) => (setHovered(true), (hoveredCard.current = e.target)),
      onMouseOut: () => (setHovered(false), (hoveredCard.current = null)),
    }),
    [setHovered]
  );

  return [hovered, eventHandlers, hoveredCard];
};
