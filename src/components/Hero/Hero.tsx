"use client";

import Image from "next/image";

import Container from "@/shared/components/Container";

import data from "./hero-data.json";

import css from "./Hero.module.css";

const Hero = () => {
  const { places, weOffer } = data;

  return (
    <section className={css.section}>
      <Container className="relative">
        <div className="flex flex-col md:flex md:flex-row-reverse md:justify-between">
          <p className="self-end text-end w-[118px] font-thin text-4xl/normal tracking-wider leading-none uppercase md:self-start md:text-[67px]/none md:tracking-[0.13em] md:w-[230px] xl:w-[305px] xl:text-[98px] xl:tracking-normal">
            <span className="font-medium">7</span>days
            <span className="block text-xs/normal tracking-[0.8em] font-light md:text-sm/normal md:tracking-[1.85em] xl:text-base xl:tracking-[2.28em]">
              journey
            </span>
          </p>
          <h1 className="mt-6 text-[40px]/[56px] font-thin -tracking-[0.04em] max-w-[280px] uppercase md:text-[67px]/tight md:mt-0 md:max-w-[426px] xl:text-[98px] xl:max-w-[646px]">
            <span className="font-medium">Uncover</span> Carpathian’s secrets
          </h1>
        </div>

        <p className="font-extralight text-[10px]/4 w-40 mt-6 md:text-sm/4 md:tracking-[0.09em] md:mt-[68px] md:w-[265px] xl:text-base xl:w-[608px] xl:mt-[148px]">
          {places}
        </p>

        <div className="mt-6 md:absolute md:bottom-0 md:right-8 md:mt-0 md:w-[230px] xl:w-[294px]">
          <p className="text-justify font-extralight text-sm md:text-base/5 xl:text-[18px]/6">
            {weOffer}
          </p>
          <button className="flex justify-between items-center w-full uppercase font-bold text-lg leading-[48px] mt-6 md:mt-7 xl:text-[32px]/normal">
            <picture>
              <source
                srcSet="/images/svg/desktop/left-btn-borders-desk.svg"
                media="(min-width: 1280px)"
              />
              <source
                srcSet="/images/svg/tablet/left-btn-borders-tab.svg"
                media="(min-width: 768px)"
              />
              <Image
                className="w-[42px] h-[53px] md:w-[35px] md:h-[50px] xl:w-[44px] xl:h-[71px]"
                alt="button`s decorative elements"
                src="/images/svg/mobile/left-btn-borders-mob.svg"
                width="0"
                height="0"
              />
            </picture>
            Join now
            <picture>
              <source
                srcSet="/images/svg/desktop/right-btn-borders-desk.svg"
                media="(min-width: 1280px)"
              />
              <source
                srcSet="/images/svg/tablet/right-btn-borders-tab.svg"
                media="(min-width: 768px)"
              />
              <Image
                className="w-[42px] h-[53px] md:w-[35px] md:h-[50px] xl:w-[44px] xl:h-[71px]"
                alt="button`s decorative element"
                src="/images/svg/mobile/right-btn-borders-mob.svg"
                width="0"
                height="0"
              />
            </picture>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
