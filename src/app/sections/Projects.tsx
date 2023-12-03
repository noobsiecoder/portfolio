import {
  Description,
  SubTitle,
  Title,
  UnorderedLists,
} from "@/components/Info";
import { Fragment } from "react";
import { NewLink } from "../components/NewLink";

type ProjectDetailProps = {
  value: string;
  path: string | null;
  lists: string[];
};

const projectInfo = [
  {
    value:
      "IoT-Enabled 6DOF Robotic Arm with Inverse Kinematic Control: Design and Implementation",
    path: "6dof-robotic-arm",
    lists: [
      "Co-authored a publication on the optimization techniques employed in a 6 Degrees of Freedom (6DOF) robotic arm. This research delves into the intricacies of robotic kinematics",
      "Engineered an innovative robotic arm system with IoT capabilities, integrating ATmega2560, ESP8266, and REST API for precise control.",
      "Developed a robust control framework using inverse kinematics and HTTP requests, ensuring efficient and accurate manipulation of the robotic arm.",
      "Demonstrated practicality through experiments and highlighted potential applications in industrial automation,agriculture, and healthcare.",
    ],
  },
  {
    value:
      "Real-Time Appereance Mapping of Indoor Environment using TurtleBot3 Burger",
    path: null,
    lists: [
      "Leveraged RTAB-Mapping algorithm for autonomous indoor mapping using TurtleBot3 Burger (LiDAR, camera, and IMU sensors) and also on RTAB-Map mobile app on iPhone 14 Pro.",
      "Conducted in-depth analysis comparing the developers’ data with our collected data, emphasizing robustness in sensor fusion for accurate mapping and localization.",
      "The project underscores hands-on experience in sensor integration and data analysis within robotics.",
    ],
  },
  {
    value: "Todo Full Stack Application",
    path: "todo-full-stack-app",
    lists: [
      "Developed a feature-rich Todo application using the MERN stack (MongoDB, Express.js, React, Node.js), showcasing frontend and backend development.",
      "Implemented efficient state management in the application using Redux, ensuring seamless data flow and a responsive user interface.",
      "Designed and implemented RESTful APIs on the server side (Node.js and Express.js), enabling robust communication between the frontend and backend for seamless task management.",
      "Created a responsive and user-friendly interface using React, providing an intuitive experience for users to manage tasks and priorities effectively.",
    ],
  },
  {
    value: "Eccentric Punching Machine",
    path: null,
    lists: [
      "Successfully conceptualized and developed a specialized punching machine as part of an undergraduate project, demonstrating the practical application of engineering principles.",
      "Utilized SolidWorks to design a distinctive punching machine, incorporating an innovative Cam and Scotch and yoke mechanism, showcasing proficiency in CAD design.",
      "Implemented a robust power system, integrating a 0.2HP DC motor with 600rpm capability, underscoring the engineering prowess applied to the project.",
      "Achieved precision in hole indentation with the punch tool, capable of creating holes with a diameter of Ø3mm and a thickness of 0.3mm, showcasing attention to detail and adherence to project specifications.",
    ],
  },
];

const ProjectDetail = ({
  value,
  path,
  lists,
}: ProjectDetailProps): JSX.Element => (
  <div className="grid gap-y-1">
    <SubTitle value={value} path={path} />
    <UnorderedLists lists={lists} />
  </div>
);

const ProjectsComponent = (): JSX.Element => (
  <div id="projects" className="grid gap-y-5">
    <div className="flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 md:justify-center">
      <Title value="Projects" />
      <Description
        value={
          <Fragment>
            These projects exemplify my diverse skill set, from software
            development in corporate settings to hands-on research in advanced
            robotics. Each venture reflects my dedication to innovation and
            problem-solving in the dynamic intersection of software and
            robotics. To view more of my work, visit my{" "}
            <NewLink
              value="GitHub Profile"
              link="https://github.com/noobsiecoder"
            />
          </Fragment>
        }
      />
    </div>
    <div className="grid space-y-3">
      {projectInfo.map((data) => (
        <ProjectDetail value={data.value} path={data.path} lists={data.lists} />
      ))}
    </div>
  </div>
);

export default ProjectsComponent;
