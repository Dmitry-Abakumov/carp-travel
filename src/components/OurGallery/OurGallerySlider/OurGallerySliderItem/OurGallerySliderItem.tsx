import css from "./OurGallerySliderItem.module.css";

import Image from "next/image";

type Props = {
  img: {
    mobile: string;
    tabDesk: string;
  };
  activeSlideIdx: number;
  slideIdx: number;
};

const OurGAllerySliderItem = ({ img, activeSlideIdx, slideIdx }: Props) => {
  return (
    <picture>
      <source srcSet={img.tabDesk} media="(min-width: 768px)" />
      <div
        className={activeSlideIdx === slideIdx ? "" : "md:relative md:w-120px"}
      >
        <Image
          className={
            activeSlideIdx === slideIdx
              ? css.baseSlide
              : `${css.baseSlide} ${css.noActiveSlide}`
          }
          alt=""
          src={img.mobile}
          loading="lazy"
          width="280"
          height="187"
        />
      </div>
    </picture>
  );
};

export default OurGAllerySliderItem;
