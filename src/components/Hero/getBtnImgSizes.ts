const MOB_SIZES = {
  width: 42,
  height: 53,
};

const TAB_SIZES = {
  width: 35,
  height: 50,
};

const DESC_SIZES = {
  width: 44,
  height: 71,
};

export const getBtnImgSizes = (currentScreenWidth: number) => {
  if ((currentScreenWidth as number) < 768) {
    return MOB_SIZES;
  }

  if (
    (currentScreenWidth as number) > 767 &&
    (currentScreenWidth as number) < 1200
  ) {
    return TAB_SIZES;
  }

  if ((currentScreenWidth as number) > 1199) {
    return DESC_SIZES;
  }
};
