import { Description, Title } from "@/components/Info";
import { FollowButton } from "@/components/NewLink";

const ContactComponent = (): JSX.Element => (
  <div id="contact" className="grid gap-y-8">
    <div className="flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 md:justify-center">
      <Title value="Contact" />
      <Description value="Feel free to reach out for inquiries or collaboration opportunities through Twitter, Email, or Instagram - let's create something amazing together!" />
    </div>
    <div className="flex flex-col gap-y-2 md:flex-row md:gap-y-0 justify-between items-center md:gap-x-4">
      <FollowButton
        link="https://twitter.com/abs_1405?ref_src=twsrc%5Etfw"
        value="X/Twitter"
      />
      <FollowButton
        link="https://instagram.com/abhishek._.sriram"
        value="Instagram"
      />
      <FollowButton
        link="https://linkedin.com/in/abhisheksriram14"
        value="LinkedIn"
      />
      <FollowButton link="mailto:abhisheksri2001@gmail.com" value="Email" />
    </div>
  </div>
);

export default ContactComponent;
