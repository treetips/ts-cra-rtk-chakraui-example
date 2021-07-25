import { Image } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {};

/**
 * Presentational Component
 * @author treetips
 */
export const SiteIcon: VFC<Props> = memo(() => {
  return (
    <Image src={`/images/react-icon.png`} alt="Site logo" w="40px" h="40px" />
  );
});
