import Image, { StaticImageData } from "next/image";
import Text, { FontAlign, FontSize, FontWeight } from "./Text";

export interface PictureProps {
  src: string | StaticImageData;
  alt: string;
  caption: string;
}

const Picture = ({ src, alt, caption }: PictureProps) => {
  return (
    <div className="grid place-items-center gap-y-2 md:w-96">
      <Image
        // loading={"lazy"}
        priority
        src={src}
        alt={alt}
        width="0"
        height="0"
        sizes="100vw"
        className="rounded-md w-full h-96 object-cover shadow-md"
      />
      <Text
        fontSize={FontSize.Caption}
        fontAlign={FontAlign.Center}
        fontWeight={FontWeight.ExtraLight}
        value={caption}
      />
    </div>
  );
};

export default Picture;
