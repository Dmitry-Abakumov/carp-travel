"use client";

import { useRef } from "react";

import WeOfferSlider from "./WeOfferSlider";

import Container from "@/shared/components/Container";

const WeOffer = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      className="pt-[56px] pb-[56px] bg-section-bg-color bg-center bg-cover bg-no-repeat md:pt-16 md:pb-16 xl:pt-[80px] xl:pb-[80px]"
      id="weOffer"
      ref={sectionRef}
    >
      <Container className="relative">
        <h2 className="uppercase font-medium text-[40px]/[56px] -tracking-[0.04em] md:text-[67px]/none xl:text-[98px]">
          <span className="font-thin">We</span> offer
        </h2>

        <WeOfferSlider sectionRef={sectionRef} />
      </Container>
    </section>
  );
};

export default WeOffer;
