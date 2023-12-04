import { DM_Sans, Lora } from "next/font/google";
import { ReactNode } from "react";
import { NewLink } from "./NewLink";

const lora = Lora({ weight: ["500", "600"], subsets: ["latin"] });
const dmSans = DM_Sans({
  weight: ["200", "300"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const Description = ({ value }: { value: ReactNode }): JSX.Element => (
  <p
    className={`text-sm ml-0.5 lg:text-base xl:text-lg tracking-tight leading-6 text-justify ${dmSans.className}`}
  >
    {value}
  </p>
);

export const MiscInfo = ({ value }: { value: string }): JSX.Element => (
  <h3 className={`text-sm font-extralight ${dmSans.className}`}>{value}</h3>
);

export const UnorderedLists = ({ lists }: { lists: string[] }): JSX.Element => (
  <ul className="ml-5 font-medium list-disc text-justify">
    {lists.map((list, ind) => (
      <li
        key={ind}
        className={`text-sm font-light lg:text-base xl:text-lg tracking-tight leading-6 text-justify ${dmSans.className}`}
      >
        {list}
      </li>
    ))}
  </ul>
);

export const SubTitle = ({
  value,
  path,
}: {
  value: string;
  path: string | null;
}): JSX.Element => (
  <h2 id="home" className={`text-lg md:text-xl lg:text-2xl xl:text-3xl ${lora.className}`}>
    <NewLink
      link={path ? path : null}
      value={value}
      isSubtitle={true}
    />
  </h2>
);

export const Title = ({ value }: { value: string }): JSX.Element => (
  <h1
    id="home"
    className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ${lora.className}`}
  >
    {value}
  </h1>
);
