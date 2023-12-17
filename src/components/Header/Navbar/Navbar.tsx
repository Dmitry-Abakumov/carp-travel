"use client";

import { Link } from "react-scroll";

import Logo from "@/shared/components/Logo";

import links from "./scroll-links-data.json";

const Navbar = () => {
  return (
    <nav className="flex justify-between align-middle">
      <Logo />
      <ul className={`hidden`}>
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

      <button type="button" className="tracking-widest text-sm">
        MENU
      </button>
    </nav>
  );
};

export default Navbar;
