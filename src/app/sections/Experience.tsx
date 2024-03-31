import Picture from "@/components/Picture";
import Text, {
  FontAlign,
  FontSize,
  FontStyle,
  FontWeight,
} from "@/components/Text";
import LoadFile from "@/utils/DataLoader";
import { Experience } from "@/utils/Types";

const ExperienceSection = async () => {
  const { experiences }: Experience = await LoadFile("experience");
  return (
    <div className="grid gap-y-1">
      <Text
        fontAlign={FontAlign.Start}
        fontSize={FontSize.Heading2}
        fontStyle={FontStyle.Lora}
        fontWeight={FontWeight.Bold}
        value="Experience"
      />
      <div className="grid gap-y-3">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="grid gap-y-4 md:grid-flow-col md:gap-x-6"
          >
            <div className="md:order-1">
              {experience["image"] === undefined ? (
                <div className="md:w-96"></div>
              ) : (
                <Picture
                  src={experience.image.src}
                  alt={experience.image.alt}
                  caption={experience.image.caption}
                />
              )}
            </div>
            <div className="flex flex-col gap-y-0.5 w-full">
              <div className="w-full flex justify-between items-center">
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Heading3}
                  fontStyle={FontStyle.Lora}
                  fontWeight={FontWeight.Bold}
                  value={experience.title}
                />
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Lora}
                  fontWeight={FontWeight.Regular}
                  value={experience.timeline}
                />
              </div>
              <div className="w-full flex items-center">
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Lora}
                  fontWeight={FontWeight.Regular}
                  value={experience.company + ","}
                />
                &nbsp;
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Lora}
                  fontWeight={FontWeight.Regular}
                  value={experience.location}
                />
              </div>
              <Text
                fontAlign={FontAlign.Justify}
                fontSize={FontSize.List}
                fontStyle={FontStyle.Poppins}
                fontWeight={FontWeight.ExtraLight}
                list={experience.responsibilities}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
