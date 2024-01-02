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
        <div className="flex flex-col md:flex md:flex-row-reverse md:gap-[48px]">
          <p className="self-end text-end w-[118px] font-thin text-4xl/normal tracking-wider leading-none uppercase md:self-start md:text-[67px]/none md:tracking-[0.13em] md:w-[230px]">
            <span className="font-medium">7</span>days
            <span className="block text-xs/normal tracking-[0.8em] font-light md:text-sm/normal md:tracking-[1.85em]">
              journey
            </span>
          </p>
          <h1 className="mt-6 text-[40px]/[56px] font-thin -tracking-[0.04em] max-w-[280px] uppercase md:text-[67px]/tight md:mt-0 md:max-w-[426px]">
            <span className="font-medium">Uncover</span> Carpathian’s secrets
          </h1>
        </div>

        <p className="font-extralight leading-4 text-[10px]/4 w-40 mt-6 md:text-sm/4 md:mt-[68px] md:w-[262px]">
          {places}
        </p>

        <div className="mt-6 md:absolute md:bottom-0 md:right-8 md:mt-0 md:w-[230px]">
          <p className="text-justify font-extralight text-sm md:w-[230px ]md:text-base/5">
            {weOffer}
          </p>
          <button className="flex justify-between items-center w-full uppercase font-bold text-lg leading-[48px] mt-6 md:mt-7">
            <picture>
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
