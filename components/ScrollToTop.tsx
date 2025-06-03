"use client";

import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleClick}
      className={`fixed right-8 bottom-8 z-[1000] !size-12 !p-0 !transition-opacity sm:!size-14 ${visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      pill
      size="xl"
    >
      <MdKeyboardDoubleArrowUp className="m-auto text-3xl" />
    </Button>
  );
};

export default ScrollToTop;
