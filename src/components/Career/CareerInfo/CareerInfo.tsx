import Container from "@/shared/components/Container";

import data from "./career-data.json";

import css from "./CareerInfo.module.css";

const ChooseUsInfo = () => {
  const { yourChance, excitingChallenges, profDev, stimulatingWork, teamwork } =
    data;

  return (
    <section className={css.section}>
      <div className="pl-5 pr-5 xs:ml-auto xs:mr-auto xs:w-480px md:p-0 md:m-0 md:w-full">
        <div className="flex flex-col md:gap-1">
          <div className="flex flex-col md:flex-row md:items-cnter md:justify-between">
            <h2 className="font-thin text-56px/none tracking-tighter">
              Choose <span className="font-medium">US</span>
            </h2>
            <p className="self-end font-extralight text-sm max-w-180px mt-6 md:mt-0 md:max-w-220px md:text-13px/5 md:text-justify">
              {yourChance}
            </p>
          </div>

          <h3 className="self-end font-extralight text-3xl/normal uppercase mr-10 mt-9 md:m-0 md:ml-20 md:self-start">
            Why us ?
          </h3>
        </div>

        <ul className="flex flex-col gap-4 mt-9 md:mt-56px md:gap-6">
          <li className="text-end max-w-180px md:max-w-225px">
            <h4 className="font-normal text-sm md:text-base/5">
              Professional development
            </h4>
            <p className="font-extralight text-xs/5 mt-2">{profDev}</p>
          </li>
          <li className="text-end max-w-180px md:max-w-225px">
            <h4 className="font-normal text-sm md:text-base/5">Teamwork</h4>
            <p className="font-extralight text-xs/5 mt-2">{teamwork}</p>
          </li>
          <li className="text-end max-w-180px md:max-w-225px">
            <h4 className="font-normal text-sm md:text-base/5">
              Stimulating work environment
            </h4>
            <p className="font-extralight text-xs/5 mt-2 md:mt-7">
              {stimulatingWork}
            </p>
          </li>
          <li className="text-end max-w-180px md:max-w-225px">
            <h4 className="font-normal text-sm md:text-base/5">
              Exciting challenges
            </h4>
            <p className="font-extralight text-xs/5 mt-2">
              {excitingChallenges}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChooseUsInfo;
