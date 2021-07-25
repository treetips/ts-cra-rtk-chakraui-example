import { ComponentProps, memo, VFC } from "react";
import { TaskSearchResult, useTaskSearchResult } from ".";

type Props = Pick<
  ComponentProps<typeof TaskSearchResult>,
  "searchResultNumber"
>;

/**
 * Container Component
 * @author treetips
 */
export const TaskSearchResultContainer: VFC<Props> = memo(
  ({ searchResultNumber }) => {
    const { labels } = useTaskSearchResult({ searchResultNumber });

    return (
      <TaskSearchResult
        searchResultNumber={searchResultNumber}
        labels={labels}
      />
    );
  }
);
