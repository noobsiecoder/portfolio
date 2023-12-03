import { DM_Sans } from "next/font/google";
import PotraitImage from "@/public/abhishek.jpg";
import ImageComponent from "@/components/Image";
import { NewLink } from "@/components/NewLink";
import { Description, Title } from "@/components/Info";
import { Fragment } from "react";

const dmSans = DM_Sans({ weight: "300", subsets: ["latin"] });

const HomeComponent = (): JSX.Element => {
  const LinkComponent = (
    <NewLink value="Zoho&nbsp;Corp" link="https://www.zohocorp.com/" />
  );
  return (
    <div
      className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12 xl:space-x-16 justify-center"
      id="home"
    >
      <ImageComponent img={PotraitImage} alt="potrait image of abhishek" />
      <div className="mt-8 flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 md:justify-center">
        <Title value="Hello, World!" />
        <Description
          value={
            <Fragment>
              Hi, I'm Abhishek, a robotics graduate student at{" "}
              <NewLink
                value="Northeastern&nbsp;University"
                link="https://www.northeastern.edu/"
              />
              . Formerly a software dev at{" "}
              <NewLink
                value="Zoho&nbsp;Corp"
                link="https://www.zohocorp.com/"
              />
              , I blend engineering and coding to craft transformative robotic
              systems. Explore my portfolio for a glimpse into my passion for
              innovation at the intersection of hardware and code.
            </Fragment>
          }
        />
      </div>
    </div>
  );
};

export default HomeComponent;
