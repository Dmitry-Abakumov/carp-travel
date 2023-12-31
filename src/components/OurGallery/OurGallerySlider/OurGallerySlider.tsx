"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import throttle from "lodash.throttle";

import OurGallerySliderItem from "./OurGallerySliderItem/OurGallerySliderItem";

import { useCurrentScreenWidth } from "@/shared/hooks";

import settings from "./settings";
import slides from "./our-gallery-slider-data.json";

import css from "./OurGallerySlider.module.css";
import "swiper/css";

const OurGallerySlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>();
  const swiperRef = useRef<SwiperRef>(null);
  const { currentScreenWidth } = useCurrentScreenWidth();

  useEffect(() => {
    swiperRef.current?.swiper.on(
      "slideChange",
      throttle(() => {
        const activeIndex = swiperRef.current?.swiper.realIndex as number;
        setActiveSlideIndex(activeIndex);
      }, 100)
    );
  }, []);

  return (
    <Swiper
      className="max-w-280px h-689px pointer-events-none md:h-auto md:w-full md:max-w-none md:pointer-events-auto"
      direction={
        (currentScreenWidth as number) < 768 ? "vertical" : "horizontal"
      }
      {...settings}
      spaceBetween={(currentScreenWidth as number) < 768 ? 0 : 24}
      ref={swiperRef}
      containerModifierClass={css.swiperContainer}
    >
      {slides.map(({ id, ...slide }, idx) => {
        return (
          <SwiperSlide className="" key={id}>
            <OurGallerySliderItem
              activeSlideIdx={activeSlideIndex as number}
              slideIdx={idx}
              {...slide}
            />
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
