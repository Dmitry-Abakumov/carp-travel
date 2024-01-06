import Image from "next/image";

import points from "./slides-points.json";

type Props = {
  goToSlide: (index: number) => void;
  activeSlideIndex: number;
};

const Points = ({ goToSlide, activeSlideIndex }: Props) => {
  return (
    <ul className="mt-6 flex flex-col gap-4 md:mt-0 xl:w-[252px]">
      {points.map((el, idx) => (
        <li className="flex gap-2 items-center" key={el}>
          {activeSlideIndex === idx && (
            <Image
              alt="marker"
              src="/images/svg/shared/active-point-marker.svg"
              width="6"
              height="6"
            />
          )}
          <button
            onClick={() => {
              goToSlide(idx);
            }}
            className={
              activeSlideIndex === idx
                ? "uppercase text-start font-medium text-xl/4 text-primary-text-color md:text-[22px]/[18px] xl:text-[28px]/6"
                : "uppercase text-start font-extralight text-xl/4 text-not-active-points md:text-[22px]/[18px] xl:text-[28px]/6"
            }
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Points;
