import { Image } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  imageDataUri: string;
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
export const TaskImage: VFC<Props> = memo(
  ({ imageDataUri, size, alt = "No Image" }) => {
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
        src={imageDataUri}
        borderWidth="1px"
        shadow="dark-lg"
        alt={alt}
        objectFit="cover"
        {...ComponentProps}
      />
    );
  }
);
