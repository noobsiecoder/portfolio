import InBlue21px from "@logo/In/In-Blue-21@2x.png";
import InWhite21px from "@logo/In/In-White-21@2x.png";
import XBlack from "@logo/X/logo-black.png";
import XWhite from "@logo/X/logo-white.png";
import IgGradient from "@logo/Ig/Instagram_Glyph_Gradient.png";
import IgWhite from "@logo/Ig/Instagram_Glyph_White.png";
import GhDark from "@logo/Gh/github-mark.png";
import GhWhite from "@logo/Gh/github-mark-white.png";

interface LinkProps {
  compType?: string;
}

interface ImgProps {
  imgSrc: {
    dark: string;
    light: string;
  };
  alt: string;
}

const links = [
  {
    name: "LinkedIn",
    alt: "LinkedIn Logo",
    link: "https://www.linkedin.com/in/abhisheksriram14",
    logo: {
      light: InBlue21px,
      dark: InWhite21px,
    },
  },
  {
    name: "Twitter",
    alt: "X/Twitter Logo",
    link: "https://www.x.com/@abs_1405",
    logo: {
      light: XBlack,
      dark: XWhite,
    },
  },
  {
    name: "Instagram",
    alt: "Instagram Logo",
    link: "https://www.instagram.com/abhishek._.sriram",
    logo: {
      light: IgGradient,
      dark: IgWhite,
    },
  },
  {
    name: "GitHub",
    alt: "GitHub Logo",
    link: "https://www.github.com/noobsiecoder",
    logo: {
      light: GhDark,
      dark: GhWhite,
    },
  },
];

const ImageComp = ({ imgSrc, alt }: ImgProps) => (
  <>
    {/* Dark Mode Image */}
    <img
      className="size-4 lg:size-[18px] xl:size-5 3xl:size-6 6xl:size-7 hidden dark:block"
      src={imgSrc.dark}
      alt={alt}
    />

    {/* Light Mode Image */}
    <img
      className="size-4 lg:size-[18px] xl:size-5 3xl:size-6 6xl:size-7 block dark:hidden"
      src={imgSrc.light}
      alt={alt}
    />
  </>
);

const Links = ({ compType }: LinkProps) => (
  <div className="flex gap-x-4">
    {compType === "exploded"
      ? links.map((link, idx) => (
          <a
            key={idx}
            className="flex items-center gap-x-1"
            href={link.link}
            target="_blank"
          >
            <ImageComp
              imgSrc={{
                dark: link.logo.dark.src,
                light: link.logo.light.src,
              }}
              alt={link.alt}
            />
            <h3 className="text-xs lg:text-sm xl:text-base 3xl:text-xl 6xl:text-2xl font-poppins tracking-tight text-stone-900 dark:text-stone-100">
              {link.name}
            </h3>
          </a>
        ))
      : links.map((link, idx) => (
          <a
            key={idx}
            className="flex items-center gap-x-1"
            href={link.link}
            target="_blank"
          >
            <ImageComp
              imgSrc={{
                dark: link.logo.dark.src,
                light: link.logo.light.src,
              }}
              alt={link.alt}
            />
          </a>
        ))}
  </div>
);

export default Links;
