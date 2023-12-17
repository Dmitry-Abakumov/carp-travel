import Container from "@/shared/components/Container";

import css from "./WeOffer.module.css";

const WeOffer = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className="uppercase font-medium  text-2.5rem/3.5rem tracking-tighter">
          <span className="font-thin">We</span> offer
        </h2>
      </Container>
    </section>
  );
};

export default WeOffer;
