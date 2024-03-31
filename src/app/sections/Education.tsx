import Picture from "@/components/Picture";
import Text, {
  FontAlign,
  FontDecoration,
  FontSize,
  FontStyle,
  FontWeight,
} from "@/components/Text";
import LoadFile from "@/utils/DataLoader";
import { Education } from "@/utils/Types";

import IMG from "@/public/images/abhi.jpg";

const EducationSection = async () => {
  const { education }: Education = await LoadFile("education");
  return (
    <div className="grid gap-y-1">
      <Text
        fontAlign={FontAlign.Start}
        fontSize={FontSize.Heading2}
        fontStyle={FontStyle.Lora}
        fontWeight={FontWeight.Bold}
        value="Education"
      />
      <div className="grid gap-y-3">
        {education.map((education, index) => (
          <div
            key={index}
            className="flex justify-between gap-y-4 md:grid-flow-col md:gap-x-6"
          >
            <div className="md:order-1 hidden md:invisible h-0">
              <Picture src={IMG} alt={""} caption={""} />
            </div>
            <div className="flex flex-col gap-y-0.5 w-full">
              <div className="w-full flex justify-between items-center">
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Heading3}
                  fontStyle={FontStyle.Lora}
                  fontWeight={FontWeight.Bold}
                  value={education.title}
                />
                <Text
                  fontAlign={FontAlign.Right}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Lora}
                  fontWeight={FontWeight.Regular}
                  value={education.timeline}
                />
              </div>
              <div className="flex items-center">
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Lora}
                  fontWeight={FontWeight.Regular}
                  value={education.school + ","}
                />
                &nbsp;
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Lora}
                  fontWeight={FontWeight.Regular}
                  value={education.location}
                />
              </div>
              <div className="">
                {/* GPA */}
                {education.description.gpa ? (
                  <>
                    <Text
                      fontAlign={FontAlign.Start}
                      fontSize={FontSize.Paragraph}
                      fontStyle={FontStyle.Poppins}
                      fontWeight={FontWeight.Regular}
                      fontDecoration={FontDecoration.Underline}
                      value={"GPA"}
                    />
                    <Text
                      fontAlign={FontAlign.Justify}
                      fontSize={FontSize.List}
                      fontStyle={FontStyle.Poppins}
                      fontWeight={FontWeight.ExtraLight}
                      value={String(education.description.gpa)}
                    />
                  </>
                ) : null}
                {/* Achievements */}
                {education.description.achievements ? (
                  <>
                    <Text
                      fontAlign={FontAlign.Start}
                      fontSize={FontSize.Paragraph}
                      fontStyle={FontStyle.Poppins}
                      fontWeight={FontWeight.Regular}
                      fontDecoration={FontDecoration.Underline}
                      value={"Achievements"}
                    />
                    <Text
                      fontAlign={FontAlign.Justify}
                      fontSize={FontSize.List}
                      fontStyle={FontStyle.Poppins}
                      fontWeight={FontWeight.ExtraLight}
                      list={education.description.achievements}
                    />
                  </>
                ) : null}
                {/* Coursework */}
                {education.description.coursework ? (
                  <>
                    <Text
                      fontAlign={FontAlign.Start}
                      fontSize={FontSize.Paragraph}
                      fontStyle={FontStyle.Poppins}
                      fontWeight={FontWeight.Regular}
                      fontDecoration={FontDecoration.Underline}
                      value={"Coursework"}
                    />
                    <Text
                      fontAlign={FontAlign.Justify}
                      fontSize={FontSize.List}
                      fontStyle={FontStyle.Poppins}
                      fontWeight={FontWeight.ExtraLight}
                      list={education.description.coursework}
                    />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
