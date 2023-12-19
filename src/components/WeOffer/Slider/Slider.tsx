"use client";

import { useRef, useState, useEffect, RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { SwiperRef } from "swiper/react";

import Slide from "./Slide";
import Points from "./Points";

import slides from "./slides-data.json";
import settings from "./settings";

import { getCurrentBgImg } from "./getCurrentBgImg";
import { getCurrentScreenWidth } from "@/shared/utils";

import "swiper/css";

type Props = {
  sectionRef: RefObject<HTMLElement>;
};

const Slider = ({ sectionRef }: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [currentScreenWidth, setCurrentScreenWidth] = useState(() =>
    getCurrentScreenWidth()
  );
  const swiperRef = useRef<SwiperRef>(null);

  const resizeHandler = () => {
    setCurrentScreenWidth(getCurrentScreenWidth());
  };

  useEffect(() => {
    document.addEventListener("resize", resizeHandler);

    return () => {
      document.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    swiperRef.current?.swiper.on("slideChange", () => {
      const activeIndex = swiperRef.current?.swiper.realIndex as number;
      setActiveSlideIndex(activeIndex);

      if (sectionRef) {
        (sectionRef.current as HTMLElement).style.backgroundImage =
          getCurrentBgImg({
            currentScreenWidth,
            activeIndex,
          });
      }
    });
  }, [activeSlideIndex, currentScreenWidth, sectionRef]);

  const goToSlide = (index: number) => {
    swiperRef?.current?.swiper.slideTo(index);
    swiperRef?.current?.swiper.update();
  };

  return (
    <>
      <p className="font-thin text-2.75rem/normal text-end mt-6">
        0{activeSlideIndex + 1}/
        <span className="text-secondary-text-color">0{`${slides.length}`}</span>
      </p>
      <Swiper
        className="max-w-17.5rem"
        ref={swiperRef}
        modules={[EffectFade]}
        {...settings}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide key={slide.id} {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Points goToSlide={goToSlide} activeSlideIndex={activeSlideIndex} />

      {
        <p className="mt-8 font-extralight text-sm">
          {slides[activeSlideIndex]?.description}
        </p>
      }
    </>
  );
};

export default Slider;
