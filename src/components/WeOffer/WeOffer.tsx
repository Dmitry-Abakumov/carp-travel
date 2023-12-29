"use client";

import { useRef } from "react";

import WeOfferSlider from "./WeOfferSlider";

import Container from "@/shared/components/Container";

import css from "./WeOffer.module.css";

const WeOffer = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className={css.section} id="weOffer" ref={sectionRef}>
      <Container className="relative">
        <h2 className="uppercase font-medium text-40px/56px -tracking-0.04em md:text-67px/none">
          <span className="font-thin">We</span> offer
        </h2>

        <WeOfferSlider sectionRef={sectionRef} />
      </Container>
    </section>
  );
};

export default WeOffer;
