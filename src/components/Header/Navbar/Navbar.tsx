"use client";

import { Link } from "react-scroll";

import Logo from "@/shared/components/Logo";

import links from "./scroll-links-data.json";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <ul className={`hidden md:flex gap-6 text-sm/normal tracking-widest`}>
        {links.map(({ sectionName, sectionId }) => {
          return (
            <li key={sectionId}>
              <Link to={sectionId} smooth={true} duration={500}>
                {sectionName}
              </Link>
            </li>
          );
        })}
      </ul>

      <button type="button" className="tracking-widest text-sm md:hidden">
        MENU
      </button>
    </nav>
  );
};

export default Navbar;
