import Text, {
  FontAlign,
  FontSize,
  FontStyle,
  FontWeight,
} from "@/components/Text";
import LoadFile from "@/utils/DataLoader";
import { Skills } from "@/utils/Types";

const SkillSection = async () => {
  const { skills }: Skills = await LoadFile("skills");
  return (
    <div className="grid gap-y-1">
      <Text
        fontAlign={FontAlign.Start}
        fontSize={FontSize.Heading2}
        fontStyle={FontStyle.Lora}
        fontWeight={FontWeight.Bold}
        value="Skills"
      />
      <div className="grid gap-y-1 lg:gap-y-0">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-wrap leading-3">
            <Text
              fontAlign={FontAlign.Start}
              fontSize={FontSize.Paragraph}
              fontStyle={FontStyle.Poppins}
              fontWeight={FontWeight.Medium}
              value={skill.name + ":"}
            />
            &nbsp;
            {skill.values.map((value, index) =>
              index === skill.values.length - 1 ? (
                <Text
                  key={index}
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.Light}
                  value={value}
                />
              ) : (
                <Text
                  key={index}
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.Light}
                  value={value + "," + "&nbsp"}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
