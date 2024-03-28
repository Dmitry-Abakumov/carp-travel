import data from "./about-data.json";

import css from "./About.module.css";

const About = () => {
  const { aboutTeam, weBelieve, ourMethods } = data;
  return (
    <section id="about" className={css.section}>
      <div className="container relative flex flex-col">
        <div className="md:flex md:gap-[76px] xl:gap-6">
          <h2 className="uppercase text-[40px]/[56px] font-medium -tracking-[0.04em] md:text-[67px]/none xl:text-[98px]">
            <span className="font-thin">Who</span> we are
          </h2>
          <div className="w-44 md:w-[220px] xl:w-[292px]">
            <p className="mt-2 font-extralight text-sm md:text-base/5 md:mt-0 xl:text-[18px]/6">
              <span className="font-normal">a team of enthusiasts</span>{" "}
              {aboutTeam}
            </p>
            <p className=" font-extralight text-sm mt-5 md:text-base/5 md:mt-4 xl:mt-6 xl:text-[18px]/6">
              <span className="font-normal">We believe</span> {weBelieve}
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-col md:mt-16 xl:flex-row-reverse xl:justify-between xl:mt-[72px]">
          <div className="flex flex-col md:absolute left-8 bottom-[124px] md:w-[220px] xl:static xl:w-[297px]">
            <p className="uppercase text-end pr-10 text-sm mt-10 md:text-base/5 md:mt-0 xl:text-[18px]/6">
              From vacationers
            </p>
            <p className="uppercase text-end text-sm md:text-base/5 xl:text-[18px]/6">
              to active travelers
            </p>
            <p className="text-end font-extralight text-sm -tracking-[0.01em] md:tracking-[0.02em] md:text-base/5 xl:text-[18px]/6 xl:tracking-[0.12em]">
              we have a tour for everyone.
            </p>
          </div>

          <p className="self-end font-extralight text-sm mt-10 md:mt-0 md:text-base/5 md:w-[460px] xl:text-[18px]/6 xl:w-[605px]">
            <span className="font-normal">We use methods</span> {ourMethods}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
