// components/safe-image.tsx
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

const SafeImage = ({
  src,
  alt,
  fallbackSrc = "/default-avatar.jpg",
  ...props
}: SafeImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        console.error(`Failed to load image: ${imgSrc}`);
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default SafeImage;
