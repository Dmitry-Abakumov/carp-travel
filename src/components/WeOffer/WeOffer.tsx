"use client";

import { useRef } from "react";

import Slider from "./Slider";

import Container from "@/shared/components/Container";

import css from "./WeOffer.module.css";

const WeOffer = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className={css.section} id="weOffer" ref={sectionRef}>
      <Container>
        <h2 className="uppercase font-medium  text-2.5rem/3.5rem tracking-tighter">
          <span className="font-thin">We</span> offer
        </h2>

        <Slider sectionRef={sectionRef} />
      </Container>
    </section>
  );
};

export default WeOffer;
