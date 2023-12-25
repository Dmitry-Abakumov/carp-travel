import Links from "./Links";
import ContactUsForm from "./ContactUsForm";

import Container from "@/shared/components/Container";

import css from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className="uppercase font-thin text-2.5rem/3.5rem tracking-tighter">
          Contact <span className="font-medium">US</span>
        </h2>
        <Links />
        <ContactUsForm />
      </Container>
    </section>
  );
};

export default ContactUs;
