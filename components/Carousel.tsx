"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import type { SwiperOptions } from "swiper/types";

interface CarouselProps extends SwiperOptions {
  children: React.ReactNode[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className = "",
  ...swiperOptions
}) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Keyboard]}
      autoplay={{ pauseOnMouseEnter: true }}
      rewind
      navigation
      slidesPerView="auto"
      keyboard
      spaceBetween={20}
      className={`items-stretch overflow-y-visible ${className}`}
      {...swiperOptions}
    >
      {children.map((child, index) => (
        <SwiperSlide className="!z-40 !h-full !w-auto py-8" key={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
