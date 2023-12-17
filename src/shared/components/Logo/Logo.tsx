import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image alt="logo" src="/images/logo/logo.png" width="61" height="33" />
    </Link>
  );
};

export default Logo;
