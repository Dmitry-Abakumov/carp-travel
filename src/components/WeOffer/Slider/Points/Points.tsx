import Image from "next/image";

import points from "./slides-points.json";

type Props = {
  goToSlide: (index: number) => void;
  activeSlideIndex: number;
};

const Points = ({ goToSlide, activeSlideIndex }: Props) => {
  return (
    <ul className=" flex flex-col gap-4 mt-6">
      {points.map((el, idx) => (
        <li className="flex gap-2 align-middle" key={el}>
          {activeSlideIndex === idx && (
            <Image
              alt="marker"
              src="/images/svg/active-point-marker.svg"
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
                ? "font-medium text-xl/4 text-primary-text-color"
                : "font-extralight text-xl/4 text-not-active-points"
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
