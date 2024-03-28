import CareerInfo from "./CareerInfo";
import JoinUs from "./JoinUs";

import css from "./Career.module.css";

const Career = () => {
  return (
    <section className={css.section} id="career">
      <div className="md:relative md:pr-8 md:pl-8 md:mr-auto md:ml-auto md:w-[768px] xl:w-[1280px] xl:h-[610px] xl:pl-6 xl:pr-6">
        <CareerInfo />
        <JoinUs />
      </div>
    </section>
  );
};

export default Career;
