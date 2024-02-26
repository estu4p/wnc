import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="absolute w-full z-30 py-5">
      <nav className="flexBetween max-container padding-container">
        <Link href={"/"}>
          <Image
            src={"/images/wnc.PNG"}
            alt="Wash & Care"
            width={48}
            height={48}
          />
        </Link>

        <ul className="hidden lg:flex h-full gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flexCenter">
          <Button
            title="Lokasi"
            type="button"
            variant="btn_dark_blue"
            height="h-12"
          />
        </div>

        <Image
          src={"/icons/hamburger-menu.svg"}
          alt="menu"
          width={38}
          height={38}
          className="cursor-pointer inline-block lg:hidden"
        />
      </nav>
    </header>
  );
};

export default Navbar;
