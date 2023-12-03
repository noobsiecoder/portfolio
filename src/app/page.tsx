"use client";

import NavigatorComponent from "@/components/Navigator";
import { useNavInfoStore } from "./store";
import HomeComponent from "@/sections/Home";
import ProjectsComponent from "@/sections/Projects";
import ExperienceComponent from "@/sections/Experience";
import EducationComponent from "@/sections/Education";
import ContactComponent from "@/sections/Contact";
import BlogComponent from "@/sections/Blog";

const Home = () => {
  const [showNavInfo, setShowNavInfo] = useNavInfoStore((state) => [
    state.showNavInfo,
    state.setShowNavInfo,
  ]);

  return (
    <>
      <NavigatorComponent
        showNavInfo={showNavInfo}
        setShowNavInfo={setShowNavInfo}
      />
      <div
        className={`${
          showNavInfo
            ? "invisible"
            : "grid gap-y-10 lg:gap-y-24"
        }`}
      >
        <HomeComponent />
        <div className="grid space-y-10">
          <BlogComponent />
          <ProjectsComponent />
          <ExperienceComponent />
          <EducationComponent />
          <ContactComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
