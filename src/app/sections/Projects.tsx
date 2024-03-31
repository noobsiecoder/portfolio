import Picture from "@/components/Picture";
import Text, {
  FontAlign,
  FontDecoration,
  FontSize,
  FontStyle,
  FontWeight,
} from "@/components/Text";
import LoadFile from "@/utils/DataLoader";
import { Projects } from "@/utils/Types";

const ProjectSection = async () => {
  const { projects }: Projects = await LoadFile("projects");
  return (
    <div className="grid gap-y-1">
      <Text
        fontAlign={FontAlign.Start}
        fontSize={FontSize.Heading2}
        fontStyle={FontStyle.Lora}
        fontWeight={FontWeight.Bold}
        value="Projects"
      />
      <div className="grid gap-y-3">
        {projects.map((project, index) => (
          <div key={index} className="grid gap-y-4 md:grid-flow-col md:gap-x-6">
            <div className="md:order-1">
              <Picture
                src={project.image.src}
                alt={project.image.alt}
                caption={project.image.caption}
              />
            </div>
            <div className="grid gap-y-0.5">
              <Text
                fontAlign={FontAlign.Start}
                fontSize={FontSize.Heading3}
                fontStyle={FontStyle.Lora}
                fontWeight={FontWeight.Bold}
                value={project.title}
              />
              <div>
                {/* Description */}
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.Regular}
                  fontDecoration={FontDecoration.Underline}
                  value={"Description"}
                />
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.List}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.ExtraLight}
                  list={project.description}
                />
                {/* Technologies */}
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.Regular}
                  fontDecoration={FontDecoration.Underline}
                  value={"Technologies"}
                />
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.List}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.ExtraLight}
                  list={[project.technologies.join(', ')]}
                />
                {/* Challenges */}
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.Regular}
                  fontDecoration={FontDecoration.Underline}
                  value={"Challenges"}
                />
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.List}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.ExtraLight}
                  list={project.challenges}
                />
                {/* Achievements */}
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.Regular}
                  fontDecoration={FontDecoration.Underline}
                  value={"Achievements"}
                />
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.List}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.ExtraLight}
                  list={project.achievements}
                />
                {/* Links */}
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.Paragraph}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.Regular}
                  fontDecoration={FontDecoration.Underline}
                  value={"Links"}
                />
                <Text
                  fontAlign={FontAlign.Start}
                  fontSize={FontSize.ListLinks}
                  fontStyle={FontStyle.Poppins}
                  fontWeight={FontWeight.Light}
                  linkList={project.links}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
