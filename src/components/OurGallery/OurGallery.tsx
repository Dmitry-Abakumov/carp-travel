import OurGallerySlider from "./OurGallerySlider/OurGallerySlider";

import Container from "@/shared/components/Container";

import css from "./OurGallery.module.css";

const OurGallery = () => {
  return (
    <section className={css.section}>
      <Container>
        <h2 className="uppercase font-medium text-2.5rem/3.5rem tracking-tighter">
          <span className="font-thin">Our</span> gallery
        </h2>
        <OurGallerySlider />
      </Container>
    </section>
  );
};

export default OurGallery;
