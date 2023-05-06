import { useState, useRef, useCallback } from "react";

export const useHttp = () => {
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {
        "Content-Type": "application/json",
        accepts: "application/json",
      }
    ) => {
      try {
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw (
            data.message || `Could not fetch ${url}, status: ${response.status}`
          );
        }

        return data;
      } catch (e) {
        throw e;
      }
    },
    []
  );

  const useHover = () => {
    const [value, setValue] = useState(false);

    const handleMouseOver = useCallback(() => setValue(true), []);
    const handleMouseOut = useCallback(() => setValue(false), []);

    const ref = useRef();

    const callbackRef = useCallback(
      (node) => {
        if (ref.current) {
          ref.current.removeEventListener("mouseover", handleMouseOver);
          ref.current.removeEventListener("mouseout", handleMouseOut);
        }

        ref.current = node;

        if (ref.current) {
          ref.current.addEventListener("mouseover", handleMouseOver);
          ref.current.addEventListener("mouseout", handleMouseOut);
        }
      },
      [handleMouseOver, handleMouseOut]
    );

    return [callbackRef, value];
  };

  return { useHover, request };
};
