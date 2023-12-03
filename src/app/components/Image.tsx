import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ImageComponentProps = {
  img: string | StaticImport;
  alt: string;
};

const ImageComponent = ({ img, alt }: ImageComponentProps): JSX.Element => (
  <div className="relative">
    <Image
      src={img}
      className="h-72 object-cover -ml-2 blur rounded-md"
      alt={alt}
    />
    <Image
      src={img}
      className="absolute h-72 object-cover top-2 rounded-md"
      alt={alt}
    />
  </div>
);

export default ImageComponent;
