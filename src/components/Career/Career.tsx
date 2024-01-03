import CareerInfo from "./CareerInfo";
import JoinUs from "./JoinUs";

import Container from "@/shared/components/Container";

import css from "./Career.module.css";

const Career = () => {
  return (
    <section className={css.section} id="career">
      <div className="md:relative md:pr-8 md:pl-8 md:mr-auto md:ml-auto md:w-[768px] xl:w-[1280px]">
        <CareerInfo />
        <JoinUs />
      </div>
    </section>
  );
};

export default Career;
