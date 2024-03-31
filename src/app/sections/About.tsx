import Picture from "@/components/Picture";
import Text, {
  FontAlign,
  FontDecoration,
  FontSize,
  FontStyle,
  FontWeight,
} from "@/components/Text";
import LoadFile from "@/utils/DataLoader";
import { About } from "@/utils/Types";

const AboutSection = async () => {
  const { image, title, description }: About = await LoadFile("about");

  return (
    <div className="grid gap-y-4 md:grid-flow-col md:gap-x-6">
      <div className="md:order-1">
        <Picture src={image.src} alt={image.alt} caption={image.caption} />
      </div>

      <div className="flex flex-col gap-y-1">
        <Text
          fontAlign={FontAlign.Start}
          fontSize={FontSize.Heading1}
          fontStyle={FontStyle.Lora}
          fontWeight={FontWeight.Bold}
          value={title}
        />
        <div className="space-y-2">
          <Text
            fontAlign={FontAlign.Justify}
            fontSize={FontSize.Paragraph}
            fontStyle={FontStyle.Poppins}
            fontWeight={FontWeight.Light}
            value={description}
          />
          <Text
            fontAlign={FontAlign.Justify}
            fontSize={FontSize.Link}
            fontStyle={FontStyle.Poppins}
            fontWeight={FontWeight.Light}
            fontDecoration={FontDecoration.Underline}
            link={{
              name: "resume",
              link: "/files/abhishek_sriram_resume.pdf",
              value: "Resume",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
