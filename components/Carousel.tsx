"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import type { SwiperOptions } from "swiper/types";

interface CarouselProps extends SwiperOptions {
  children: React.ReactNode[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className = "",
  pagination = true,
  ...swiperOptions
}) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Keyboard, Pagination]}
      autoplay={{ pauseOnMouseEnter: true }}
      rewind
      navigation={{
        enabled: true,
        hideOnClick: false,
      }}
      keyboard
      breakpoints={{
        0: { navigation: { enabled: false }, slidesPerView: 1 },
        320: { navigation: true, slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      slidesPerView={1}
      spaceBetween={20}
      pagination={pagination ? { clickable: true } : { enabled: false }}
      className={`!pt-8 ${pagination ? "!pb-12" : "!pb-8"} ${className}`}
      {...swiperOptions}
    >
      {children.map((child, index) => (
        <SwiperSlide
          className="not-intersect:opacity-0 intersect:motion-opacity-in-0 intersect:motion-scale-in-0"
          key={index}
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
