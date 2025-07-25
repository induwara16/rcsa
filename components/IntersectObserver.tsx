"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

export default function IntersectObserver() {
  const pathname = usePathname();
  useEffect(() => {
    Observer.start();
  }, []);

  return <div key={pathname} />;
}
