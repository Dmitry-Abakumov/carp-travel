import Links from "./Links";
import ContactUsForm from "./ContactUsForm";

import css from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section id="contactUs" className={css.section}>
      <div className="container">
        <h2 className="uppercase font-thin text-[40px]/[56px] tracking-tighter md:text-[67px]/[1] xl:text-[98px]/[119px]">
          Contact <span className="font-medium">US</span>
        </h2>
        <div className="xl:flex xl:justify-end xl:gap-[231px] xl:mt-[71px]">
          <Links />
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
