"use client";

import NavigatorComponent from "@/components/Navigator";
import { useNavInfoStore } from "./store";
import HomeComponent from "@/sections/Home";
import ProjectsComponent from "@/sections/Projects";
import ExperienceComponent from "@/sections/Experience";
import EducationComponent from "@/sections/Education";
import ContactComponent from "./sections/Contact";

const Home = () => {
  const [showNavInfo, setShowNavInfo] = useNavInfoStore((state) => [
    state.showNavInfo,
    state.setShowNavInfo,
  ]);
  return (
    <>
      <div
        className={`${
          showNavInfo
            ? "hidden"
            : "p-4 mt-10 md:px-12 md:py-8 lg:px-24 xl:px-32 w-screen lg:mt-24 xl:mt-12 grid space-y-32"
        }`}
      >
        <HomeComponent />
        <div className="grid space-y-10">
          <ProjectsComponent />
          <ExperienceComponent />
          <EducationComponent />
          <ContactComponent />
        </div>
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
