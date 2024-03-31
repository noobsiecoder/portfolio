import Text, {
  FontAlign,
  FontSize,
  FontStyle,
  FontWeight,
} from "@/components/Text";
import LoadFile from "@/utils/DataLoader";
import { Links } from "@/utils/Types";

const LinkSection = async () => {
  const { links }: Links = await LoadFile("links");
  return (
    <div className="grid gap-y-1">
      <Text
        fontAlign={FontAlign.Start}
        fontSize={FontSize.Heading2}
        fontStyle={FontStyle.Lora}
        fontWeight={FontWeight.Bold}
        value="Links"
      />
      <div className="grid">
        {links.map((link, index) => (
          <div key={index} className="flex items-center">
            <Text
              fontAlign={FontAlign.Start}
              fontSize={FontSize.Paragraph}
              fontStyle={FontStyle.Lora}
              fontWeight={FontWeight.Bold}
              value={link.name + ":"}
            />
            &nbsp;
            <Text
              fontAlign={FontAlign.Start}
              fontSize={FontSize.Link}
              fontStyle={FontStyle.Poppins}
              fontWeight={FontWeight.Light}
              link={link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkSection;
