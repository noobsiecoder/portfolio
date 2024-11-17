import Link from "next/link";
import { getOrderedData } from "@/data/init";
import Project from "@/components/v1/Project";

interface ProjectsProps {
  showLink: boolean;
}

const MoreProjectsLink = () => {
  return (
    <Link
      href="/v1/projects"
      className="mt-1 flex items-center gap-x-1 transition ease-in-out delay-150 lg:hover:translate-x-8 xl:hover:translate-x-10 2xl:hover:translate-x-12 lg:hover:scale-110"
    >
      <span className="font-poppins font-semibold text-sm text-stone-800">
        View more projects
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </Link>
  );
};

const Projects = async ({ showLink }: ProjectsProps) => {
  const projectsInfo = await getOrderedData("projects", "timestamp", "desc");

  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="font-poppins font-semibold text-stone-800 text-xl lg:text-2xl xl:text-3xl">
        Projects
      </h3>
      <div className="grid gap-y-6 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-4">
        {projectsInfo.map((project, idx) => (
          <Project
            key={idx + (100 + Math.random() * 1000)} // range: 100-999
            display={showLink ? project.display : true}
            image={project.image}
            alt={project.alt}
            link={project.link}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
          />
        ))}
      </div>
      {showLink ? <MoreProjectsLink /> : <></>}
    </div>
  );
};

export default Projects;
