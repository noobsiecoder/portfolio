import { DM_Sans } from "next/font/google";
import PotraitImage from "@/public/abhishek.jpg";
import ImageComponent from "@/components/Image";
import { NewLink } from "@/components/NewLink";
import { Description, Title } from "@/components/Info";
import { Fragment } from "react";

const dmSans = DM_Sans({ weight: "300", subsets: ["latin"] });

const HomeComponent = (): JSX.Element => {
  return (
    <div
      className="flex flex-col md:flex-row md:gap-x-8 lg:gap-x-12 xl:gap-y-14 md:justify-between"
      id="home"
    >
      <ImageComponent img={PotraitImage} alt="potrait image of abhishek" />
      <div className="lg:w-[240%] xl:w-[160%] mt-8 flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2 md:justify-center">
        <Title value="Hello, World!" />
        <Description
          value={
            <Fragment>
              Hey there! I'm Abhishek, a robotics graduate student at
              Northeastern University. I used to geek out as a software dev at
              Zoho Corp, and now I'm diving into the world of robotics, where I
              mix engineering and coding to create some seriously cool robotic
              systems. Curious to know more? Explore my portfolio for a sneak
              peek into my passion for innovation at the sweet spot where
              hardware and code collide. And if you want the nitty-gritty
              details, check out my <NewLink value="Resume" link="#" />. It's
              like the backstage pass to my professional journey!
            </Fragment>
          }
        />
      </div>
    </div>
  );
};

export default HomeComponent;
