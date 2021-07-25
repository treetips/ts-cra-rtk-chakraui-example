import { ComponentProps, memo, VFC } from "react";
import { SiteIcon } from ".";

type Props = ComponentProps<typeof SiteIcon>;

/**
 * Container Component
 * @author treetips
 */
export const SiteIconContainer: VFC<Props> = memo(() => {
  return <SiteIcon />;
});
