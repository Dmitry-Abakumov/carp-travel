import Image from "next/image";

type Props = {
  img: {
    mobile: string;
    tabDesk: string;
  };
};

const OurGAllerySliderItem = ({ img }: Props) => {
  return (
    <picture>
      <source srcSet={img.tabDesk} media="(min-width: 768px)" />
      <Image
        className="absolute bottom-0 md:static md:w-[415px] md:h-[294px] md:max-w-none"
        alt=""
        src={img.mobile}
        loading="lazy"
        width="280"
        height="187"
      />
    </picture>
  );
};

export default OurGAllerySliderItem;
