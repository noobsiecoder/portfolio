import {
  Description,
  MiscInfo,
  SubTitle,
  Title,
  UnorderedLists,
} from "@/components/Info";

type EducationDetailProps = {
  value: string;
  school: string;
  lists: string[];
};

const educationInfo: EducationDetailProps[] = [
  {
    value: "Master of Science in Robotics",
    school: "Northeastern University (Boston, MA)",
    lists: [
      "Relevant Coursework: Robot Sensing and Navigation (EECE5554), Robot Mechanics and Controls (ME5250).",
    ],
  },
  {
    value: "Bachelors of Engineering in Mechanical Engineering",
    school: "Anna University (TN, India)",
    lists: [
      "Secured a GPA: 3.83/4.00 (CGPA: 9.01/10.00).",
      "Awarded the 'Best Outgoing Student of batch (2019-2023)' based on academic excellence and active participation in the robotics club.",
    ],
  },
];

const EducationDetail = ({
  value,
  school,
  lists,
}: EducationDetailProps): JSX.Element => (
  <div className="grid gap-y-2">
    <div className="grid gap-y-0">
      <div className="flex items-baseline justify-between">
        <SubTitle value={value} path={null} />
      </div>
      <MiscInfo value={school} />
    </div>
    <UnorderedLists lists={lists} />
  </div>
);

const EducationComponent = (): JSX.Element => (
  <div id="education" className="grid gap-y-5">
    <div className="flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 md:justify-center">
      <Title value="Education" />
      <Description value="My undergrad days were all about plunging into Mechanical Engineering, building up that solid foundation in understanding how things work. Now, in grad school, I've jumped into the world of Robotics. I'm knee-deep in automation and clever systems, sharpening my skills and loving every bit of it!" />
    </div>
    <div className="grid space-y-4">
      {educationInfo.map((data, ind) => (
        <EducationDetail
          key={ind}
          value={data.value}
          school={data.school}
          lists={data.lists}
        />
      ))}
    </div>
  </div>
);

export default EducationComponent;
