"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "flowbite-react/components/Button";

import { attributes as banner_1 } from "@/content/banners/banner-1.md";

export const Banner1: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const text = div.querySelector<HTMLDivElement>(".banner-1-text");
    const image = div.querySelector<HTMLImageElement>(".banner-1-image>img");
    if (!text || !image) return;

    const resize = () => {
      image.style.maxHeight = `${text.offsetHeight}px`;
      image.hidden = false;
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(text);

    return () => observer.disconnect();
  }, []);

  const { title, subtitle, background, text, show, button, image } =
    banner_1 as Banner1Attributes;
  if (!show) return;

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const bgSrc = require(`@/content/banners/${background}`);

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const imageSrc = require(`@/content/banners/${image}`);

  return (
    <div
      ref={divRef}
      className="intersect:motion-preset-slide-up-lg not-intersect:invisible relative flex items-center gap-10 overflow-hidden rounded-2xl px-8 py-10 sm:px-14"
    >
      <Image
        src={bgSrc}
        fill
        alt="Banner"
        className="-z-10 object-cover object-center opacity-80 dark:opacity-100"
      />

      <div className="banner-1-text flex flex-1/2 flex-col max-md:gap-3 max-md:text-center">
        <h3 className="text-xl font-semibold text-neutral-600">{subtitle}</h3>

        <h1 className="mt-3 text-3xl font-semibold text-neutral-800">
          {title}
        </h1>

        <p className="mt-4 max-w-160 text-[15px] text-neutral-500">{text}</p>

        <Button
          as={Link}
          href={button.link}
          pill
          target={button.newtab ? "_blank" : "_self"}
          className="mt-6 mr-auto max-md:ml-auto"
        >
          {button.text}
        </Button>
      </div>

      <div className="banner-1-image -my-4 max-md:hidden">
        <Image className="w-auto" hidden src={imageSrc} alt="Banner" />
      </div>
    </div>
  );
};
