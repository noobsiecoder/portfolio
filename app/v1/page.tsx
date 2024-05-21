import Image from "next/image";
import { DesktopNavbar, MobileNavbar } from "@components/v1/Navbar";
import intro from "@data/intro";

const IntroSection = () => (
  <div className="pt-16 lg:pt-20 xl:pt-24 2xl:pt-28">
    <div className="grid justify-center gap-y-4 w-full">
      <div className="flex justify-center items-center">
        <Image
          src={intro.image}
          alt={intro.alt}
          className="rounded-full w-72 h-72 object-fill"
        />
      </div>
      <div className="grid gap-y-2">
        <div className="">
          <h1 className="text-center font-semibold text-3xl lg:text-4xl 2xl:text-5xl">{intro.title}</h1>
          <h3 className="text-center font-medium text-sm lg:text-base 2xl:text-xl">{intro.caption}</h3>
        </div>
        <p className="text-justify font-light text-sm lg:text-base">{intro.description}</p>
      </div>
    </div>
  </div>
);

const Page = () => {
  return (
    <main className="min-h-screen relative px-6 py-12 md:px-24 lg:px-48 xl:px-72 xl:py-16 2xl:px-96">
      <DesktopNavbar />
      <IntroSection />
      <MobileNavbar />
    </main>
  );
};

export default Page;
