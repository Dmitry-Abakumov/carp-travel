import data from "./career-data.json";

import css from "./CareerInfo.module.css";

const ChooseUsInfo = () => {
  const { yourChance, excitingChallenges, profDev, stimulatingWork, teamwork } =
    data;

  return (
    <section className={css.section}>
      <div className="pl-5 pr-5 xs:ml-auto xs:mr-auto xs:w-[480px] md:p-0 md:m-0 md:w-full">
        <div className="flex flex-col gap-9 md:gap-3 xl:gap-[55px]">
          <div className="flex flex-col md:flex-row md:items-cnter md:justify-between">
            <h2 className="uppercase font-thin text-[56px]/none tracking-tighter xl:text-[98px]">
              Choose <span className="font-medium">US</span>
            </h2>
            <p className="self-end font-extralight text-sm w-[180px] mt-6 md:mt-0 md:w-[220px] md:text-[13px]/5 md:text-justify xl:text-[18px]/6 xl:w-[293px]">
              {yourChance}
            </p>
          </div>

          <h3 className="self-end font-extralight text-3xl/normal uppercase mr-10 md:mr-0 md:ml-20 md:self-start xl:text-[36px]/[39px] xl:ml-[123px]">
            Why us ?
          </h3>
        </div>

        <ul className="flex flex-col gap-4 mt-9 md:mt-[56px] md:gap-6 xl:mt-[45px]">
          <li className={css.listItem}>
            <h4 className={css.subtitle}>Professional development</h4>
            <p className="font-extralight text-xs/5 mt-2 xl:mt-0 xl:w-[285px] xl:text-start">
              {profDev}
            </p>
          </li>
          <li className={css.listItem}>
            <h4 className={css.subtitle}>Teamwork</h4>
            <p className="font-extralight text-xs/5 mt-2 xl:mt-0 xl:w-[285px] xl:text-start">
              {teamwork}
            </p>
          </li>
          <li className={css.listItem}>
            <h4 className={css.subtitle}>Stimulating work environment</h4>
            <p className="font-extralight text-xs/5 mt-2 md:mt-7 xl:mt-0 xl:w-[285px] xl:text-start">
              {stimulatingWork}
            </p>
          </li>
          <li className={css.listItem}>
            <h4 className={css.subtitle}>Exciting challenges</h4>
            <p className="font-extralight text-xs/5 mt-2 xl:mt-0 xl:w-[285px] xl:text-start">
              {excitingChallenges}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChooseUsInfo;
