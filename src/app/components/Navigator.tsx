import { DM_Sans } from "next/font/google";
import { Close, Hamburger } from "./Icons";
import { GoToSection } from "./NewLink";

const dmSans = DM_Sans({ weight: "300", subsets: ["latin"] });

type NavigatorProps = {
  showNavInfo: boolean;
  setShowNavInfo: (value: boolean) => void;
  scrollAxis?: { x: number; y: number };
  setScrollAxis?: ({ x, y }: { x: number; y: number }) => void;
};

const NavigationButton = ({
  showNavInfo,
  setShowNavInfo,
}: NavigatorProps): JSX.Element => (
  <button
    onClick={(event) => {
      event.preventDefault();
      !showNavInfo
        ? document.body.classList.add("overflow-y-hidden")
        : document.body.classList.remove("overflow-y-hidden");
      setShowNavInfo(!showNavInfo);
    }}
    className="bg-zinc-950 rounded-md p-4 transition ease-in-out duration-500 hover:-translate-y-1"
  >
    {!showNavInfo ? <Hamburger /> : <Close />}
  </button>
);

const NavigatorList = ({
  showNavInfo,
  setShowNavInfo,
}: NavigatorProps): JSX.Element => (
  <ul
    className={`grid gap-y-12 lg:gap-y-16 xl:gap-y-20 items-center text-center ${dmSans.className}`}
  >
    <li className="text-xl lg:text-2xl xl:text-3xl font-semibold">
      <GoToSection
        link="#blog"
        value="Blog"
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </li>
    <li className="text-xl lg:text-2xl xl:text-3xl font-semibold">
      <GoToSection
        link="#projects"
        value="Projects"
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </li>
    <li className="text-xl lg:text-2xl xl:text-3xl font-semibold">
      <GoToSection
        link="#experience"
        value="Experience"
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </li>
    <li className="text-xl lg:text-2xl xl:text-3xl font-semibold">
      <GoToSection
        link="#education"
        value="Education"
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </li>
    <li className="text-xl lg:text-2xl xl:text-3xl font-semibold">
      <GoToSection
        link="#contact"
        value="Contact"
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </li>
    <li className="text-xl lg:text-2xl xl:text-3xl font-semibold">
      <GoToSection
        link="resume"
        value="Resume"
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </li>
  </ul>
);

const NavigatorComponent = ({
  showNavInfo,
  setShowNavInfo,
}: NavigatorProps): JSX.Element => (
  <>
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        showNavInfo ? "bg-white" : "hidden"
      }`}
    >
      <NavigatorList
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </div>
    <div className="fixed bottom-8 lg:top-12 xl:top-20 -right-2 lg:right-16 -translate-x-1/2">
      <NavigationButton
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </div>
  </>
);

export default NavigatorComponent;
