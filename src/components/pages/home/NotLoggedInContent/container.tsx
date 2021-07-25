import { ComponentProps, memo, VFC } from "react";
import { NotLoggedInContent, useNotLoggedInContent } from ".";

type Props = Pick<ComponentProps<typeof NotLoggedInContent>, "statusCode">;

/**
 * Container Component
 * @author treetips
 */
export const NotLoggedInContentContainer: VFC<Props> = memo(
  ({ statusCode }) => {
    const { labels } = useNotLoggedInContent();

    return <NotLoggedInContent statusCode={statusCode} labels={labels} />;
  }
);
