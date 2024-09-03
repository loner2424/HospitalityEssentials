import React, { useState, useEffect } from "react";

const useScrollingHeader = (
  scrollColor = "bg-white text-black",
  defaultColor = "bg-transparent text-white"
) => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 37) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = `z-[999] fixed top-0 left-0 w-full transition-all duration-300 ${
    scrolling ? scrollColor : defaultColor
  }`;

  return headerClassName;
};

export default useScrollingHeader;
