import { memo, VFC } from "react";
import { LoggedInContent, useLoggedInContent } from ".";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const LoggedInContentContainer: VFC<Props> = memo(() => {
  const { labels } = useLoggedInContent();

  return <LoggedInContent labels={labels} />;
});
