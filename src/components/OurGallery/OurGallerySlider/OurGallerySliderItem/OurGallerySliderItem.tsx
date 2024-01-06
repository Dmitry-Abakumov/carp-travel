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
        className="absolute bottom-0 md:static md:w-full md:h-auto"
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
