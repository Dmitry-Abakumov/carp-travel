import Image from "next/image";

import Container from "@/shared/components/Container";

import data from "./hero-data.json";

import css from "./Hero.module.css";

const Hero = () => {
  const { places, weOffer } = data;

  return (
    <section className={css.section}>
      <Container className="flex flex-col gap-6">
        <p className="flex flex-col self-end font-thin text-4xl/normal tracking-wider leading-none uppercase">
          <span>
            <span className="font-medium">7</span>days
          </span>
          <span className="text-xs/normal tracking-0.8em font-light">
            journey
          </span>
        </p>
        <h1 className="text-2.5rem leading-3.5rem font-thin tracking-tighter max-w-xs uppercase">
          <span className="font-medium">Uncover</span> Carpathian’s secrets
        </h1>
        <p className="font-extralight leading-4 text-0.625rem w-40">{places}</p>
        <p className="text-justify font-extralight text-sm">{weOffer}</p>
        <button className="flex justify-between uppercase font-bold text-lg leading-3rem">
          <Image
            alt="button`s decorative elements"
            src="/images/svg/left-btn-borders-mob.svg"
            width="42"
            height="53"
          />
          Join now
          <Image
            alt="button`s decorative elements"
            src="/images/svg/right-btn-borders-mob.svg"
            width="42"
            height="53"
          />
        </button>
      </Container>
    </section>
  );
};

export default Hero;
