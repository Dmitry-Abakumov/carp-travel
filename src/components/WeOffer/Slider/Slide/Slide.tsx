type Props = {
  id: string;
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

const Slide = ({ id, img, caption }: Props) => {
  return (
    <>
      <picture>
        {/* <source srcSet={img.desktop} media="(min-width: 1280px)" /> */}
        <img alt="" src={img.mobile} loading="lazy" />
      </picture>

      <p className="text-end mt-3 font-extralight text-xs/6 tracking-0.2em">
        {caption}
      </p>
    </>
  );
};

export default Slide;
