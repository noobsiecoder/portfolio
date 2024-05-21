"use client";

import Image, { StaticImageData } from "next/image";
import sites from "@data/sites";
import Link from "next/link";
import { useState } from "react";

interface NavLinkProps {
  name: string;
  site: string;
}

interface LogoProps {
  alt: string;
  image: StaticImageData;
  site: string;
}

const LogoComponent = ({ site, image, alt }: LogoProps) => {
  return (
    <Link href={site} target="_blank" rel="noopener nonreferrer">
      <Image
        src={image}
        alt={alt}
        className={`w-8 h-8 2xl:w-9 2xl:h-9 ${
          alt.includes("github") ? "bg-white rounded" : null
        }`}
        priority
      />
    </Link>
  );
};

const NavLink = ({ name, site }: NavLinkProps) => (
  <Link href={site}>
    <h2 className="capitalize font-medium 2xl:text-xl">{name}</h2>
  </Link>
);

export const DesktopNavbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="hidden md:flex md:gap-x-5">
        <NavLink name="About" site="#" />
        <NavLink name="Portfolio" site="#" />
        <NavLink name="Blog" site="#" />
        <NavLink name="Contact" site="#" />
        <NavLink name="Resume" site="#" />
      </div>
      <div className="invisible"></div>
      <div className="flex gap-x-4">
        {sites.map((value, idx) => (
          <LogoComponent
            key={idx}
            site={value.site}
            image={value.image}
            alt={value.alt}
          />
        ))}
      </div>
    </nav>
  );
};

export const MobileNavbar = () => {
  const [isToggled, setToggleState] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 md:hidden space-y-2 z-10">
      <div
        className={`bg-white p-6 w-32 rounded-md gap-y-2 ${
          isToggled ? "grid" : "hidden"
        }`}
      >
        <NavLink name="About" site="#" />
        <NavLink name="Portfolio" site="#" />
        <NavLink name="Blog" site="#" />
        <NavLink name="Contact" site="#" />
        <NavLink name="Resume" site="#" />
      </div>
      <button
        className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center gap-y-2 float-right"
        onClick={() => setToggleState((value) => !value)}
      >
        <span
          className={`w-8 h-1 bg-black rounded-sm transition delay-75 ${
            isToggled ? " rotate-45 translate-y-1.5" : null
          }`}
        ></span>
        <span
          className={`w-8 h-1 bg-black rounded-sm transition delay-75 ${
            isToggled ? "-rotate-45 -translate-y-1.5" : null
          }`}
        ></span>
      </button>
    </div>
  );
};
