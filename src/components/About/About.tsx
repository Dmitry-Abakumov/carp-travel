import Container from "@/shared/components/Container";

import data from "./about-data.json";

import css from "./About.module.css";

const About = () => {
  const { aboutTeam, weBelieve, ourMethods } = data;
  return (
    <section id="about" className={css.section}>
      <Container>
        <h2 className="uppercase text-2.5rem/3.5rem font-medium tracking-tighter">
          <span className="font-thin">Who</span> we are
        </h2>
        <p className="mt-2 font-extralight text-sm w-44 ">
          <span className="font-normal">a team of enthusiasts</span> {aboutTeam}
        </p>
        <p className=" font-extralight text-sm w-44 mt-5">
          <span className="font-normal">We believe</span> {weBelieve}
        </p>

        <p className="uppercase text-end pr-10 text-sm mt-10">
          From vacationers
        </p>
        <p className="uppercase text-end text-sm">to active travelers</p>
        <p className=" text-end font-extralight text-sm">
          we have a tour for everyone.
        </p>

        <p className="font-extralight text-sm mt-10">
          <span className="font-normal">We use methods</span> {ourMethods}
        </p>
      </Container>
    </section>
  );
};

export default About;
