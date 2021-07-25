import { ComponentProps, memo, VFC } from "react";
import { NoImage } from ".";

type Props = ComponentProps<typeof NoImage>;

/**
 * Container Component
 * @author treetips
 */
export const NoImageContainer: VFC<Props> = memo(({ size }) => {
  return <NoImage size={size} />;
});
