import Link from "next/link";
import { Href } from "./Icons";

type LinkProps = {
  value: String;
  link: string | null;
  isSubtitle?: boolean;
  showNavInfo?: boolean;
  setShowNavInfo?: (value: boolean) => void;
};

export const NewLink = ({
  value,
  link,
  isSubtitle,
}: LinkProps): JSX.Element => {
  const values = value.split(" ");
  let tillEndWord: string = "";
  let endWord: string = "";

  values.forEach((word, ind) =>
    ind != values.length - 1 ? (tillEndWord += word + " ") : (endWord += word)
  );

  return isSubtitle ? (
    link ? (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={link + ""}
        className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        {tillEndWord}
        <div className="inline-flex items-center gap-x-1.5">
          {endWord} <Href />
        </div>
      </Link>
    ) : (
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{value}</h2>
    )
  ) : (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={link + ""}
      className="inline-flex gap-x-0.5 items-center underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
    >
      {value} <Href />
    </Link>
  );
};

export const GoToSection = ({
  value,
  link,
  showNavInfo,
  setShowNavInfo,
}: LinkProps): JSX.Element => (
  <Link
    onClick={(event) => {
      setShowNavInfo?.(!showNavInfo);
    }}
    href={`/#${link}`}
  >
    {value}
  </Link>
);
