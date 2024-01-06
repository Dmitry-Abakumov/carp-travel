import css from "./Links.module.css";

const Links = () => {
  return (
    <div className="flex flex-col mt-9 gap-6 md:flex-row md:gap-[90px] xl:mt-0 xl:flex-col xl:gap-[124px]">
      <div className="self-end md:self-start">
        <ul className="flex flex-col">
          <li className="flex items-center gap-5 self-end">
            <a className={css.link} href="tel:+380981234567">
              +380 (98) 12 34 567
            </a>
            <p className={css.linkBlockName}>Phone number</p>
          </li>
          <li className="ml-[26px] md:ml-[30px]">
            <a className={css.link} href="tel:+380731234567">
              +38 (073) 12 34 567
            </a>
          </li>
        </ul>

        <div className="mt-6 flex self-end items-center gap-5 mr-[46px]">
          <a
            className={css.link}
            href="mailto:support@carptravel.com"
            lang="en"
          >
            support@carptravel.com
          </a>
          <p className={css.linkBlockName}>E-mail</p>
        </div>
      </div>

      <div className="flex self-end gap-5 mr-4 md:mr-0">
        <p className={css.linkBlockName}>Follow us</p>
        <ul className="">
          <li className="flex items-center gap-5">
            <a className={css.link} href="#">
              facebook
            </a>
          </li>
          <li>
            <a className={css.link} href="#">
              instagram
            </a>
          </li>
          <li>
            <a className={css.link} href="#">
              youtube
            </a>
          </li>
          <li>
            <a className={css.link} href="#">
              tiktok
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
