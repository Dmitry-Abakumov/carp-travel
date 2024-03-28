"use client";

import OurGallerySlider from "./OurGallerySlider/OurGallerySlider";

import css from "./OurGallery.module.css";

const OurGallery = () => {
  return (
    <section id="ourGallery" className={css.section}>
      <div className="container">
        <h2 className="uppercase font-medium text-[40px]/[1.4] tracking-tighter md:text-center xl:text-[98px]/[1.2]">
          <span className="font-thin">Our</span> gallery
        </h2>
        <OurGallerySlider />
      </div>
    </section>
  );
};

export default OurGallery;
