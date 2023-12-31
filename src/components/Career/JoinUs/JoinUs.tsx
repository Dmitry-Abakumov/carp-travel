import JoinUsForm from "./JoinUsForm";

import css from "./JoinUs.module.css";

const JoinUs = () => {
  return (
    <section className={css.section}>
      <div className="flex flex-col gap-6 pl-5 pr-5 xs:ml-auto xs:mr-auto xs:w-[480px] md:items-end md:p-0 md:m-0 md:w-none">
        <div className="md:w-[463px] xl:w-[606px]">
          <ul className="self-end max-w-[180px] md:self-start md:max-w-[220px] md:text-[13px]/5 xl:max-w-[240px]">
            <li>
              <b className="font-extralight text-sm xl:text-[18px]/6">
                Don`t miss your opportunity!
              </b>
            </li>
            <li>
              <b className="font-extralight text-sm xl:text-[18px]/6">
                Fill out the form right now and join our team!
              </b>
            </li>
          </ul>
          <JoinUsForm />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
