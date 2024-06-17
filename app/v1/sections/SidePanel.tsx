import Image from "next/image";
import Link from "next/link";
import asideInfo from "@/data/aside";

const SidePanel = () => {
  return (
    <div className="grid gap-y-2 lg:fixed lg:w-[28%] lg:gap-y-5">
      <div>
        <h1 className="font-poppins font-bold text-stone-50 text-2xl lg:text-3xl xl:text-4xl">
          {asideInfo.title}
        </h1>
        <p className="font-poppins font-light text-stone-50 text-base tracking-tight leading-tight">
          {asideInfo.caption}
        </p>
      </div>
      <div className="grid gap-y-1">
        <h3 className="font-poppins font-semibold text-stone-50 text-base">
          Links
        </h3>
        <div className="flex gap-x-3">
          {asideInfo.links.slice(0, 4).map((link, idx) => (
            <Link
              key={idx + 1}
              href={link.site}
              className="flex justify-center items-center bg-blue-950 p-3 rounded-md"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={link.image}
                alt={link.alt}
                className="size-7 lg:size-6"
                priority={true}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Link href="#contact">
          <div className="p-4 bg-stone-50 rounded-md w-full lg:w-56">
            <h2 className="font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-950 text-base text-center">
              {asideInfo.cta}
            </h2>
          </div>
        </Link>
      </div>
      <div className="hidden lg:block lg:fixed lg:bottom-12 lg:w-[28%]">
        <p className="font-poppins font-light text-stone-50 text-xs">
          {asideInfo.credit}
        </p>
      </div>
    </div>
  );
};

export default SidePanel;
