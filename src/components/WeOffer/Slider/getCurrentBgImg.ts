import slidesData from "./slides-data.json";

type Args = {
  currentScreenWidth: number;
  activeIndex: number;
};

export const getCurrentBgImg = ({ currentScreenWidth, activeIndex }: Args) => {
  if (currentScreenWidth < 768) {
    return `url(${slidesData[activeIndex].bgImg.mobile})`;
  }

  if (currentScreenWidth > 767 && currentScreenWidth < 1280) {
    return `url(${slidesData[activeIndex].bgImg.tablet})`;
  }

  return `url("${slidesData[activeIndex].bgImg.desktop})"`;
};
