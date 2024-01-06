"use client";

import { useRef, useState, useEffect, RefObject } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
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
    swiperRef.current?.swiper.on("slideChange", () => {
      const activeIndex = swiperRef.current?.swiper.realIndex as number;
      setActiveSlideIndex(activeIndex);
    });

    if (sectionRef && typeof currentScreenWidth === "number") {
      (sectionRef.current as HTMLElement).style.backgroundImage =
        getCurrentBgImg({
          currentScreenWidth,
          activeSlideIndex,
        });
    }
  }, [activeSlideIndex, currentScreenWidth, sectionRef]);

  const goToSlide = (index: number) => {
    swiperRef?.current?.swiper.slideToLoop(index);
    swiperRef?.current?.swiper.update();
  };

  return (
    <>
      <p className="font-thin text-[44px]/normal text-end mt-6 md:mt-0 md:absolute md:top-0 md:right-[86px] md:text-[67px]/none xl:right-[392px] xl:text-[98px]">
        0{activeSlideIndex + 1}/
        <span className="text-secondary-text-color">0{`${slides.length}`}</span>
      </p>
      <div className="md:flex md:gap-5 md:mt-9 xl:mt-6">
        <Swiper
          className="w-[280px] h-[213px] md:w-[460px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
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

        <div className="xl:w-[605px]">
          <div className="mt-3 md:flex md:flex-col md:justify-between md:w-[220px] md:mt-0 xl:gap-6 xl:w-full">
            <div className="md:flex md:flex-col-reverse md:gap-6 xl:flex-row-reverse xl:gap-[60px] xl:justify-end">
              <p className="text-end font-extralight text-xs/6 tracking-[0.2em] md:mt-0 md:text-start">
                {slides[activeSlideIndex]?.caption}
              </p>
              <Points
                goToSlide={goToSlide}
                activeSlideIndex={activeSlideIndex}
              />
            </div>

            {
              <p className="mt-8 font-extralight text-sm md:text-justify md:mt-0 md:text-[13px]/5 xl:self-end xl:text-[18px]/6 xl:w-[293px]">
                {slides[activeSlideIndex]?.description}
              </p>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default WeOfferSlider;
