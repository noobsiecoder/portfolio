"use client";

import NavigatorComponent from "@/components/Navigator";
import { useNavInfoStore } from "./store";
import Info from "./Info";

const Home = () => {
  const [showNavInfo, setShowNavInfo] = useNavInfoStore((state) => [
    state.showNavInfo,
    state.setShowNavInfo,
  ]);
  return (
    <>
      <div className={`${showNavInfo ? "hidden" : ""}`}>
        <Info />
      </div>
      <div className="relative">
        <NavigatorComponent
          showNavInfo={showNavInfo}
          setShowNavInfo={setShowNavInfo}
        />
      </div>
    </>
  );
};

export default Home;
