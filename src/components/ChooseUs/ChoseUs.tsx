import Container from "@/shared/components/Container";

import data from "./choose-us-data.json";

import css from "./ChooseUs.module.css";

const ChooseUs = () => {
  const { yourChance, excitingChallenges, profDev, stimulatingWork, teamwork } =
    data;
  return (
    <section className={css.section}>
      <Container className="flex flex-col">
        <h2 className="font-thin text-3.5rem/normal tracking-tighter">
          Choose <span className="font-medium">US</span>
        </h2>
        <p className=" flex self-end font-extralight text-sm max-w-11.25rem mt-6">
          {yourChance}
        </p>
        <h3 className="flex self-end font-extralight text-3xl/normal uppercase mr-10 mt-9">
          Why us ?
        </h3>
        <ul className="flex flex-col gap-4 mt-9">
          <li className="text-end max-w-11.25rem">
            <h4 className="font-normal text-sm">Professional development</h4>
            <p className="font-extralight text-xs/5 mt-2">{profDev}</p>
          </li>
          <li className="text-end max-w-11.25rem">
            <h4 className="font-normal text-sm">Teamwork</h4>
            <p className="font-extralight text-xs/5 mt-2">{teamwork}</p>
          </li>
          <li className="text-end max-w-11.25rem">
            <h4 className="font-normal text-sm">
              Stimulating work environment
            </h4>
            <p className="font-extralight text-xs/5 mt-2">{stimulatingWork}</p>
          </li>
          <li className="text-end max-w-11.25rem">
            <h4 className="font-normal text-sm">Exciting challenges</h4>
            <p className="font-extralight text-xs/5 mt-2">
              {excitingChallenges}
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ChooseUs;
