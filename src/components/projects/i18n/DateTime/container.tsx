import { ComponentProps, memo, VFC } from "react";
import { DateTime } from ".";

type Props = ComponentProps<typeof DateTime>;

/**
 * Container Component
 * @author treetips
 */
export const DateTimeContainer: VFC<Props> = memo(({ value }) => {
  return <DateTime value={value} />;
});
