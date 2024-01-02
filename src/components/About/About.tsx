import Container from "@/shared/components/Container";

import data from "./about-data.json";

import css from "./About.module.css";

const About = () => {
  const { aboutTeam, weBelieve, ourMethods } = data;
  return (
    <section id="about" className={css.section}>
      <Container className="relative flex flex-col">
        <div className="md:flex md:gap-[76px]">
          <h2 className="uppercase text-[40px]/[56px] font-medium -tracking-[0.04em] md:text-[67px]/none">
            <span className="font-thin">Who</span> we are
          </h2>
          <div>
            <p className="mt-2 font-extralight text-sm w-44 md:text-base/5 md:mt-0 md:w-[220px]">
              <span className="font-normal">a team of enthusiasts</span>{" "}
              {aboutTeam}
            </p>
            <p className=" font-extralight text-sm w-44 mt-5 md:text-base/5 md:w-[220px] md:mt-4">
              <span className="font-normal">We believe</span> {weBelieve}
            </p>
          </div>
        </div>

        <div className=" flex flex-col md:absolute left-8 bottom-[124px] md:w-[220px]">
          <p className="uppercase text-end pr-10 text-sm mt-10 md:text-base/5 md:mt-0">
            From vacationers
          </p>
          <p className="uppercase text-end text-sm md:text-base/5">
            to active travelers
          </p>
          <p className=" text-end font-extralight text-sm -tracking-[0.01em] md:tracking-[0.02em] md:text-base/5">
            we have a tour for everyone.
          </p>
        </div>

        <p className="self-end font-extralight text-sm mt-10 md:text-base/5 md:mt-16 md:w-[460px]">
          <span className="font-normal">We use methods</span> {ourMethods}
        </p>
      </Container>
    </section>
  );
};

export default About;
