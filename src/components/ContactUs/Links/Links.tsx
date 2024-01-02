const Links = () => {
  return (
    <div className="flex flex-col gap-6">
      <ul className="self-end mt-9">
        <li className="flex items-center gap-5">
          <a className="text-sm/6" href="tel:+380981234567">
            +380 (98) 12 34 567
          </a>
          <p className="font-extralight text-xs/5">Phone number</p>
        </li>
        <li>
          <a className="text-sm/6" href="tel:+380731234567">
            +38 (073) 12 34 567
          </a>
        </li>
      </ul>

      <div className="flex self-end items-center gap-5 mr-[46px]">
        <a className="text-sm/6" href="mailto:support@carptravel.com" lang="en">
          support@carptravel.com
        </a>
        <p className="font-extralight text-xs/5">E-mail</p>
      </div>

      <div className=" flex self-end gap-5 mr-4">
        <p className="font-extralight text-xs/5">Follow us</p>
        <ul className="">
          <li className="flex items-center gap-5">
            <a className="text-sm/6" href="#">
              facebook
            </a>
          </li>
          <li>
            <a className="text-sm/6" href="#">
              instagram
            </a>
          </li>
          <li>
            <a className="text-sm/6" href="#">
              youtube
            </a>
          </li>
          <li>
            <a className="text-sm/6" href="#">
              tiktok
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
