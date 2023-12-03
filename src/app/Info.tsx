import { Lora, DM_Sans } from "next/font/google";
import PotraitImage from "@/public/abhishek.jpg";
import ImageComponent from "./components/Image";

const lora = Lora({ weight: "600", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: "300", subsets: ["latin"] });

const Title = (): JSX.Element => (
  <h1 className={`text-2xl ${lora.className}`}>Hello, World!</h1>
);

const Description = (): JSX.Element => (
  <p className={`text-sm tracking-tight leading-6 text-justify ${dmSans.className}`}>
    Hi, I'm Abhishek, a robotics grad student at Northeastern University. Formerly a software dev at Zoho Corp, I blend engineering and coding to craft transformative robotic systems. Explore my portfolio for a glimpse into my passion for innovation at the
    intersection of hardware and code.
  </p>
);

const Info = (): JSX.Element => (
  <div className="p-4 w-screen grid justify-center mt-2">
    <ImageComponent img={PotraitImage} alt="potrait image of abhishek" />
    <div className="mt-8 grid gap-y-0.5">
      <Title />
      <Description />
    </div>
  </div>
);

export default Info;
