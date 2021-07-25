import { Image } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  size?: {
    width?: string;
    height?: string;
  };
  alt?: string;
};

/**
 * Presentational Component
 * @author treetips
 */
export const NoImage: VFC<Props> = memo(({ size, alt = "No Image" }) => {
  const ComponentProps: { width?: string; height?: string } = {};
  if (size) {
    if (size.width) {
      ComponentProps.width = size.width;
    }
    if (size.height) {
      ComponentProps.height = size.height;
    }
  }

  return (
    <Image
      src="/images/noimage.jpg"
      alt={alt}
      objectFit="cover"
      borderWidth="1px"
      shadow="dark-lg"
      {...ComponentProps}
    />
  );
});
