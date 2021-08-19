import React, { useState, useEffect } from "react";

export function useScroll(props) {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setIsScroll(window.scrollY > 0);
    });
  }, []);

  return isScroll;
}
