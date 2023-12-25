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

const WeOfferSliderItem = ({ img, caption }: Props) => {
  return (
    <>
      <picture>
        {/* <source srcSet={img.desktop} media="(min-width: 1280px)" /> */}
        <Image
          alt=""
          src={img.mobile}
          loading="lazy"
          width={280}
          height={213}
        />
      </picture>

      <p className="text-end mt-3 font-extralight text-xs/6 tracking-0.2em">
        {caption}
      </p>
    </>
  );
};

export default WeOfferSliderItem;
