"use client";

import { Close, Hamburger } from "./Icons";

type NavigatorProps = {
  showNavInfo: boolean;
  setShowNavInfo: (value: boolean) => void;
};

const NavigationButton = ({
  showNavInfo,
  setShowNavInfo,
}: NavigatorProps): JSX.Element => (
  <button
    onClick={(event) => {
      event.preventDefault();
      setShowNavInfo(!showNavInfo);
    }}
    className="bg-zinc-950 rounded-md p-4 transition ease-in-out duration-500 hover:-translate-y-1"
  >
    {!showNavInfo ? <Hamburger /> : <Close />}
  </button>
);

const NavigatorList = (): JSX.Element => (
  <ul className="flex flex-col justify-center items-center gap-y-12">
    <li className="text-lg font-semibold">Home</li>
    <li className="text-lg font-semibold">Projects</li>
    <li className="text-lg font-semibold">Experience</li>
    <li className="text-lg font-semibold">Contact</li>
  </ul>
);

const NavigatorComponent = ({
  showNavInfo,
  setShowNavInfo,
}: NavigatorProps): JSX.Element => (
  <div className="">
    <div
      className={`bg-white ${
        showNavInfo ? "p-36" : "hidden"
      }`}
    >
      <NavigatorList />
    </div>
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
      <NavigationButton
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
    </div>
  </div>
);

export default NavigatorComponent;
