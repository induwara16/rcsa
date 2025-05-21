"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "flowbite-react/components/Button";

import { attributes as banner_1 } from "@/content/banners/banner-1.md";
import { attributes as banner_2 } from "@/content/banners/banner-2.md";

import logo from "@/assets/images/logo.png";

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
    <section
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
          className="mt-6 mr-auto max-md:ml-auto focus:!ring-primary-300"
        >
          {button.text}
        </Button>
      </div>

      <div className="banner-1-image -my-4 max-md:hidden">
        <Image className="w-auto" hidden src={imageSrc} alt="Banner" />
      </div>
    </section>
  );
};

export const Banner2: React.FC = () => {
  const { text, show, buttons, background } = banner_2 as Banner2Attributes;
  if (!show) return;

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const bgSrc = require(`@/content/banners/${background}`);

  return (
    <section className="intersect:motion-preset-slide-up-lg no-dark not-intersect:invisible relative flex items-center gap-6 overflow-hidden rounded-2xl px-8 py-8 max-md:flex-col sm:px-14 sm:py-14 md:gap-10">
      <Image
        src={bgSrc}
        fill
        alt="Banner"
        className="-z-10 object-cover object-center opacity-80 dark:opacity-100"
      />

      <div className="aspect-square w-30 rounded-full bg-white p-5 min-md:max-lg:hidden">
        <Image className="m-auto" src={logo} alt="RCSA" />
      </div>

      <h3 className="text-xl font-semibold text-neutral-800 max-sm:text-center">
        {text}
      </h3>

      <div className="ml-auto flex gap-4 max-md:mr-auto max-sm:flex-col">
        {buttons.button1.show && (
          <Button
            as={Link}
            href={buttons.button1.link}
            pill
            outline
            color="dark"
            className="!border-gray-800 !text-neutral-800 hover:!bg-gray-900 hover:!text-neutral-200 focus:!ring-gray-300"
            target={buttons.button1.newtab ? "_blank" : "_self"}
          >
            {buttons.button1.text}
          </Button>
        )}

        <Button
          as={Link}
          href={buttons.button2.link}
          pill
          target={buttons.button2.newtab ? "_blank" : "_self"}
          className="focus:!ring-primary-300"
        >
          {buttons.button2.text}
        </Button>
      </div>
    </section>
  );
};
