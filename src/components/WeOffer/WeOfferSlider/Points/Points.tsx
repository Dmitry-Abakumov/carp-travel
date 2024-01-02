import Image from "next/image";

import points from "./slides-points.json";

type Props = {
  goToSlide: (index: number) => void;
  activeSlideIndex: number;
};

const Points = ({ goToSlide, activeSlideIndex }: Props) => {
  return (
    <ul className="mt-6 flex flex-col gap-4 md:mt-0">
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
                ? "font-medium text-xl/4 text-primary-text-color md:text-[22px]/[18px]"
                : "font-extralight text-xl/4 text-not-active-points md:text-[22px]/[18px]"
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
