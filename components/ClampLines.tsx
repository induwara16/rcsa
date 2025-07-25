"use client";

import { usePathname } from "next/navigation";
import ClampLines, { ClampLinesProps } from "react-clamp-lines";

export default function ClampLines1({
  buttons = false,
  className = "",
  innerElement = "p",
  ...props
}: ClampLinesProps) {
  const pathname = usePathname();
  return (
    <ClampLines
      key={pathname}
      className={`${className} line-clamp-6`}
      innerElement={innerElement}
      buttons={buttons}
      {...props}
    />
  );
}
