"use client";

import { useRef, useState, useEffect, RefObject } from "react";
import { Swiper, SwiperSlide, SwiperRef, useSwiper } from "swiper/react";
import { EffectFade } from "swiper/modules";
import throttle from "lodash.throttle";

import WeOfferSliderItem from "./WeOfferSliderItem";
import Points from "./Points";

import { useCurrentScreenWidth } from "@/shared/hooks";

import slides from "./we-offer-slider-data.json";
import settings from "./settings";

import { getCurrentBgImg } from "./getCurrentBgImg";

import "swiper/css";

type Props = {
  sectionRef: RefObject<HTMLElement>;
};

const WeOfferSlider = ({ sectionRef }: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const { currentScreenWidth } = useCurrentScreenWidth();

  useEffect(() => {
    swiperRef.current?.swiper.on(
      "slideChange",
      throttle(() => {
        const activeIndex = swiperRef.current?.swiper.realIndex as number;
        setActiveSlideIndex(activeIndex);

        if (sectionRef && typeof currentScreenWidth === "number") {
          (sectionRef.current as HTMLElement).style.backgroundImage =
            getCurrentBgImg({
              currentScreenWidth,
              activeIndex,
            });
        }
      }, 100)
    );
  }, [activeSlideIndex, currentScreenWidth, sectionRef]);

  const goToSlide = (index: number) => {
    swiperRef?.current?.swiper.slideToLoop(index);
    swiperRef?.current?.swiper.update();
  };

  return (
    <>
      <p className="font-thin text-44px/normal text-end mt-6">
        0{activeSlideIndex + 1}/
        <span className="text-secondary-text-color">0{`${slides.length}`}</span>
      </p>
      <Swiper
        className="max-w-280px"
        ref={swiperRef}
        modules={[EffectFade]}
        {...settings}
      >
        {slides.map(({ id, ...slide }) => (
          <SwiperSlide key={id}>
            <WeOfferSliderItem {...slide} />
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

export default WeOfferSlider;
