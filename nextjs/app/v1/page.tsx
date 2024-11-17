import About from "@/sections/v1/About";
import SidePanel from "@/sections/v1/SidePanel";
import Projects from "@/sections/v1/Projects";
import Blogs from "@/sections/v1/Blogs";
import Contact from "@/sections/v1/Contact";

const Page = () => {
  return (
    <>
      <aside className="relative bg-gradient-to-r from-blue-600 to-blue-950 px-8 py-12 lg:w-4/12 lg:py-16 xl:py-20">
        <SidePanel />
      </aside>
      <main className="p-8 bg-stone-50 flex flex-col gap-y-4 lg:gap-y-6 xl:gap-y-8 lg:w-8/12 lg:py-16 lg:px-24 xl:py-20 xl:px-32">
        <About />
        <Projects showLink={true} />
        <Blogs />
        <Contact />
      </main>
    </>
  );
};

export default Page;
