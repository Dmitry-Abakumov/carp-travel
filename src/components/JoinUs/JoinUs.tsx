import JoinUsForm from "./JoinUsForm";

import Container from "@/shared/components/Container";

import css from "./JoinUs.module.css";

const JoinUs = () => {
  return (
    <section className={css.section}>
      <Container className="flex flex-col gap-6">
        <ul className="self-end font-extralight text-sm max-w-11.25rem">
          <li>
            <b>Don`t miss your opportunity!</b>
          </li>
          <li>
            <b>Fill out the form right now and join our team!</b>
          </li>
        </ul>
        <JoinUsForm />
      </Container>
    </section>
  );
};

export default JoinUs;
