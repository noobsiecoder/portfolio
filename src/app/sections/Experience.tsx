import {
  Description,
  MiscInfo,
  SubTitle,
  Title,
  UnorderedLists,
} from "@/components/Info";

type ExperienceDetailProps = {
  value: string;
  start: string;
  end: string;
  company: string;
  lists: string[];
};

const experienceInfo: ExperienceDetailProps[] = [
  {
    value: "Member of Technical Staff",
    start: "Jun 2023",
    end: "Aug 2023",
    company: "Zoho Corporation (TN, India)",
    lists: [
      "Worked on a proof of concept for translating custom fields into the CRM product. The feature is strategically aimed at cutting down translation costs significantly, leading to potential cost savings for the company.",
      "Leveraged the translation using Zoho's Natural Language Processing API.",
      "Achieved a significant average translation accuracy of 92% between the seven most used languages in the Zoho CRM app, ensuring quality and reliability.",
    ],
  },
  {
    value: "Project Trainee",
    start: "Jan 2023",
    end: "May 2023",
    company: "Zoho Corporation (TN, India)",
    lists: [
      "Developed a full-stack application using Spring MVC and Zoho’s in-house JavaScript framework (Lyte).",
      "Learned Java EE technologies such as servlet, Struts, and Spring MVC for web application development.",
      "Gained hands-on experience in PostgreSQL for database management.",
    ],
  },
  {
    value: "Intern: Mechanical Engineer",
    start: "Nov 2023",
    end: "Dec 2023",
    company: "Larsen & Toubro Limited (TN, India)",
    lists: [
      "Worked with WET IC - International BU team and gained knowledge of the pipeline system, different pump types used in the waste effluent treatment plant, and other necessary specifications for a pipeline system following industry standards.",
      "Utilized an Excel spreadsheet to determine the pipe wall thickness as per AWWA M11 and BS9295.",
      "Gained familiarity with piping and instrumentation schematics.",
    ],
  },
];

const ExperienceDetail = ({
  value,
  start,
  end,
  company,
  lists,
}: ExperienceDetailProps): JSX.Element => (
  <div className="grid gap-y-2">
    <div className="grid gap-y-0">
      <div className="flex items-baseline justify-between">
        <SubTitle value={value} path={null} />
        <span className="hidden md:block italic">
          <MiscInfo value={`${start} - ${end}`} />
        </span>
      </div>
      <MiscInfo value={company} />
    </div>
    <UnorderedLists lists={lists} />
  </div>
);

const ExperienceComponent = (): JSX.Element => (
  <div id="experience" className="grid gap-y-5">
    <div className="flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 md:justify-center">
      <Title value="Experience" />
      <Description value="I've got this cool perspective that links the real world with the digital one. My journey? Well, I've tinkered with mechanical systems and smoothly shifted into the coding universe. It's all about that mix, you know - blending hands-on experience with software chops. I'm all about looking at problems from every angle and cooking up innovative solutions!" />
    </div>
    <div className="grid space-y-4">
      {experienceInfo.map((data, ind) => (
        <ExperienceDetail
          key={ind}
          value={data.value}
          start={data.start}
          end={data.end}
          company={data.company}
          lists={data.lists}
        />
      ))}
    </div>
  </div>
);

export default ExperienceComponent;
