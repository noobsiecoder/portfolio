import AboutSection from "@/sections/About";
import SkillSection from "@/sections/Skills";
import ProjectSection from "./sections/Projects";
import ExperienceSection from "./sections/Experience";
import EducationSection from "./sections/Education";
import LinkSection from "./sections/OtherLinks";
import BlogSection from "./sections/Blog";

const Page = async () => {
  return (
    <main className="grid gap-y-6">
      <AboutSection />
      <SkillSection />
      <BlogSection />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
      <LinkSection />
    </main>
  );
};

export default Page;
