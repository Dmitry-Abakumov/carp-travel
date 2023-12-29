import Image from "next/image";

type Props = {
  img: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  bgImg: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  caption: string;
};

const WeOfferSliderItem = ({ img }: Props) => {
  return (
    <>
      <picture>
        <source srcSet={img.tablet} media="(min-width: 768px)" />
        <Image
          className="md:w-full md:h-auto"
          alt=""
          src={img.mobile}
          loading="lazy"
          width="280"
          height="413"
        />
      </picture>
    </>
  );
};

export default WeOfferSliderItem;
