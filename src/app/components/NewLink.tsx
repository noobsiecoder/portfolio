import Link from "next/link";
import { DM_Sans, Lora } from "next/font/google";
import { Href } from "./Icons";

const dmSans = DM_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

type LinkProps = {
  value: String;
  link: string | null;
  isSubtitle?: boolean;
  showNavInfo?: boolean;
  setShowNavInfo?: (value: boolean) => void;
};

export const FollowButton = ({ value, link }: LinkProps) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={link + ""}
    className={`w-full md:w-2/3 h-12 bg-white text-zinc-950 border-2 border-zinc-950 hover:ring-2 hover:ring-offset-2 hover:ring-zinc-950 hover:bg-zinc-900 hover:text-white rounded-md flex justify-center items-center ${dmSans.className}`}
  >
    <span>{value}</span>
  </Link>
);

export const GoToSection = ({
  value,
  link,
  showNavInfo,
  setShowNavInfo,
}: LinkProps): JSX.Element => (
  <Link
    onClick={() => {
      document.body.classList.remove("overflow-y-hidden");
      setShowNavInfo?.(!showNavInfo);
    }}
    href={`/${link}`}
  >
    {value}
  </Link>
);

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
      <>{value}</>
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
