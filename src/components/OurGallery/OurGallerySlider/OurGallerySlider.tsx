"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import Image from "next/image";

import OurGallerySliderItem from "./OurGallerySliderItem/OurGallerySliderItem";

import { useCurrentScreenWidth } from "@/shared/hooks";

import settings from "./settings";
import slides from "./our-gallery-slider-data.json";

import css from "./OurGallerySlider.module.css";

import "swiper/css";

const OurGallerySlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const swiperRef = useRef<SwiperRef>(null);
  const { currentScreenWidth } = useCurrentScreenWidth();

  useEffect(() => {
    swiperRef.current?.swiper.on("slideChange", () => {
      console.log("slide changed");
      const activeIndex = swiperRef.current?.swiper.realIndex as number;
      setActiveSlideIndex(activeIndex);
    });
  }, []);

  const nextIndex =
    activeSlideIndex !== slides.length - 1 ? activeSlideIndex + 1 : 0;
  const prevIndex =
    activeSlideIndex !== 0 ? activeSlideIndex - 1 : slides.length - 1;

  return (
    <div className="md:flex md:items-end md:gap-6 md:mt-[72px]">
      {(currentScreenWidth as number) > 767 && (
        <div className="md:flex md:flex-col md:justify-end md:gap-[47px]">
          <div className={css.imgWrap}>
            <picture>
              <Image
                alt=""
                src={slides[prevIndex]?.img.tabDesk}
                width="120"
                height="87"
              />
            </picture>
          </div>

          <button
            onClick={() => swiperRef?.current?.swiper.slidePrev()}
            className="md:uppercase md:self-end md:font-thin md:text-[33px]/normal"
            type="button"
          >
            Prev
          </button>
        </div>
      )}

      <Swiper
        className="max-w-[280px] h-[689px] pointer-events-none md:flex md:justify-center md:h-auto md:w-[415px] md:max-w-none md:pointer-events-auto"
        direction={
          (currentScreenWidth as number) < 768 ? "vertical" : "horizontal"
        }
        slidesPerView={(currentScreenWidth as number) < 768 ? 3 : 1}
        {...settings}
        ref={swiperRef}
      >
        {slides.map(({ id, ...slide }) => {
          return (
            <SwiperSlide key={id}>
              <OurGallerySliderItem {...slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {(currentScreenWidth as number) > 767 && (
        <div className="md:flex md:flex-col md:justify-end md:gap-[47px]">
          <div className={css.imgWrap}>
            <picture>
              <Image
                alt=""
                src={slides[nextIndex]?.img.tabDesk}
                width="120"
                height="87"
              />
            </picture>
          </div>
          <button
            onClick={() => swiperRef?.current?.swiper.slideNext()}
            className="md:uppercase md:self-start md:font-thin md:text-[33px]/normal"
            type="button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OurGallerySlider;
