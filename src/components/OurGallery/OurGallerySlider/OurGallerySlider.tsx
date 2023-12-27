"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import OurGallerySliderItem from "./OurGallerySliderItem/OurGallerySliderItem";

import { useCurrentScreenWidth } from "@/shared/hooks";

import settings from "./settings";
import slides from "./our-gallery-slider-data.json";

import "swiper/css";

const OurGallerySlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const { currentScreenWidth } = useCurrentScreenWidth();
  return (
    <Swiper
      className="max-w-280px"
      slidesPerView={(currentScreenWidth as number) < 768 ? 3 : 1}
      direction="vertical"
      // {...settings}
      ref={swiperRef}
    >
      {slides.map(({ id, ...slide }) => {
        return (
          <SwiperSlide key={id}>
            <OurGallerySliderItem {...slide} />
          </SwiperSlide>
        );
      })}

      {/* <button
        onClick={() => swiperRef.current}
        className="uppercase"
        type="button"
      >
        Prev
      </button> */}

      {/* <button onClick={() => {}} className="uppercase" type="button">
        Next
      </button> */}
    </Swiper>
  );
};

export default OurGallerySlider;
