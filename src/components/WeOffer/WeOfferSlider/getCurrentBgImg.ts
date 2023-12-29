import slidesData from "./we-offer-slider-data.json";

type Args = {
  currentScreenWidth: number;
  activeSlideIndex: number;
};

export const getCurrentBgImg = ({
  currentScreenWidth,
  activeSlideIndex,
}: Args) => {
  if (currentScreenWidth < 768) {
    return `url(${slidesData[activeSlideIndex].bgImg.mobile})`;
  }

  if (currentScreenWidth > 767 && currentScreenWidth < 1280) {
    return `url(${slidesData[activeSlideIndex].bgImg.tablet})`;
  }

  return `url("${slidesData[activeSlideIndex].bgImg.desktop})"`;
};
