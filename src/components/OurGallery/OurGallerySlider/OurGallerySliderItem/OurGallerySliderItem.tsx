import Image from "next/image";

type Props = {
  img: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

const OurGAllerySliderItem = ({ img }: Props) => {
  return (
    <picture>
      {/* <source srcSet={img.desktop} media="(min-width: 1280px)" /> */}
      <Image
        className="mt-6"
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
