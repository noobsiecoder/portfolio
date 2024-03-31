import { Lora, Poppins } from "next/font/google";
import Link from "next/link";

export enum FontSize {
  Heading1,
  Heading2,
  Heading3,
  Caption,
  List,
  Link,
  ListLinks,
  Paragraph,
}

export enum FontWeight {
  ExtraLight = "font-extralight",
  Light = "font-light",
  Regular = "font-regular",
  Medium = "font-medium",
  Semibold = "font-semibold",
  Bold = "font-bold",
}

export enum FontDecoration {
  Underline = "underline",
  Italic = "italic",
  None = "no-underline",
}

export enum FontStyle {
  Lora,
  Poppins,
}

export enum FontAlign {
  //   Left,
  Right = "text-right",
  Center = "text-center",
  Start = "text-start",
  Justify = "text-justify",
  End = "text-end",
}

interface TestProps {
  fontSize: FontSize;
  fontAlign?: FontAlign;
  fontDecoration?: FontDecoration;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  value?: string;
  list?: Array<string>;
  linkList?: Array<{ name: string; link: string }>;
  link?: { name: string; link: string; value: string };
}

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const Text = ({
  fontSize,
  fontAlign,
  fontDecoration,
  fontStyle,
  fontWeight,
  value,
  list,
  linkList,
  link,
}: TestProps) => {
  switch (fontSize) {
    case FontSize.Heading1:
      return (
        <h1
          className={`text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ${fontWeight} ${fontDecoration} ${
            fontStyle === FontStyle.Lora ? lora.className : poppins.className
          }`}
        >
          {value}
        </h1>
      );
    case FontSize.Heading2:
      return (
        <h2
          className={`text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ${fontWeight} ${fontDecoration} ${
            fontStyle === FontStyle.Lora ? lora.className : poppins.className
          }`}
        >
          {value}
        </h2>
      );
    case FontSize.Heading3:
      return (
        <h3
          className={`text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-5 ${fontWeight} ${fontDecoration} ${
            fontStyle === FontStyle.Lora ? lora.className : poppins.className
          }`}
        >
          {value}
        </h3>
      );
    case FontSize.Caption:
      return (
        <h3
          className={`text-xs lg:text-sm leading-5 ${fontWeight} ${fontDecoration} ${
            fontStyle === FontStyle.Lora ? lora.className : poppins.className
          }`}
        >
          {value}
        </h3>
      );
    case FontSize.List:
      return (
        <ul className="px-6 list-disc">
          {list?.map((values, index) => (
            <li
              key={index}
              className={`text-sm lg:text-base ${fontWeight} ${fontDecoration} ${
                fontStyle === FontStyle.Lora
                  ? lora.className
                  : poppins.className
              }`}
              dangerouslySetInnerHTML={{ __html: values }}
            ></li>
          ))}
        </ul>
      );
    case FontSize.Link:
      return (
        <div className="flex space-x-1 items-center">
          <Link
            className={`text-sm lg:text-base text-blue-700 ${fontWeight} ${fontDecoration} ${
              fontStyle === FontStyle.Lora ? lora.className : poppins.className
            }`}
            href={link?.link ?? ""}
            target="_blank"
            rel="noopener nonreferrer"
          >
            {link?.value}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </div>
      );
    case FontSize.ListLinks:
      return (
        <ul className="px-6 list-disc grid gap-y-0.5">
          {linkList?.map((value, index) => (
            <li
              key={index}
              className={`text-sm lg:text-base text-blue-700 ${fontWeight} ${fontDecoration} ${
                fontStyle === FontStyle.Lora
                  ? lora.className
                  : poppins.className
              }`}
            >
              <div className="flex items-center space-x-1">
                <Link
                  href={value.link}
                  target="_blank"
                  rel="noopener nonreferrer"
                >
                  {value.name}
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-blue-700 hidden md:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      );
    case FontSize.Paragraph:
      return (
        <p
          className={`text-sm lg:text-base ${fontWeight} ${fontDecoration} ${fontAlign} ${
            fontStyle === FontStyle.Lora ? lora.className : poppins.className
          }`}
          dangerouslySetInnerHTML={{ __html: value ?? "" }}
        ></p>
      );
    default:
      return <div></div>;
  }
};

export default Text;
