"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import { MdZoomIn } from "react-icons/md";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox, { type Slide } from "yet-another-react-lightbox";
import { Zoom, Thumbnails, Captions } from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

export interface Pic {
  title: string;
  description?: string;
  width: number;
  height: number;
  src: string;
}

export default function Gallery({
  pics,
  height = 350,
  hideMobile = false,
}: {
  pics: Pic[];
  height?: number;
  hideMobile?: boolean;
}) {
  const [index, setIndex] = useState(-1);

  const photos = pics.map(function (pic, i) {
    return {
      ...pic,
      alt: pic.title,
      key: `${pic.title}-${i}`,
    };
  });

  function NextJSSlide({
    slide: { width, height, ...slide },
  }: {
    slide: Slide;
  }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { key, ...props } = slide as Slide & { key: unknown };

    return (
      <div style={{ width, height }}>
        <Image
          {...(props as ImageProps)}
          alt=""
          className="object-contain"
          fill
        />
      </div>
    );
  }

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={height}
        componentsProps={{ container: { className: "not-prose md:my-4" } }}
        render={{
          image: function (props, { index, height }) {
            return (
              <div
                className={`group relative flex h-full overflow-hidden rounded-lg bg-black shadow-md ${hideMobile && index > 3 ? "max-sm:hidden" : ""} `}
                style={{ height }}
              >
                <Image
                  {...(props as ImageProps)}
                  fill
                  className="object-cover"
                  alt=""
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 !transition-opacity group-hover:opacity-100" />
                <MdZoomIn className="pointer-events-none relative z-100 m-auto size-18 text-gray-200 opacity-0 drop-shadow-2xl drop-shadow-white !transition group-hover:opacity-100" />
              </div>
            );
          },
        }}
        onClick={function ({ index }) {
          setIndex(index);
        }}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails, Zoom, Captions]}
        render={{
          slide: NextJSSlide,
          thumbnail: NextJSSlide,
        }}
      />
    </>
  );
}
