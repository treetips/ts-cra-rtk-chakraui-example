import { memo, VFC } from "react";
import { TaskSearchForm } from ".";
import { useTaskSearchForm } from "./hooks";

type Props = {
  keywordQueryString?: string;
};

/**
 * Container Component
 * @author treetips
 */
export const TaskSearchFormContainer: VFC<Props> = memo(
  ({ keywordQueryString }) => {
    const {
      keyword,
      handleKeyword,
      handleSearchTask,
      handleEnter,
      handleClearKeyword,
      labels,
    } = useTaskSearchForm({ keywordQueryString });

    return (
      <TaskSearchForm
        keyword={keyword}
        onChange={handleKeyword}
        onEnter={handleEnter}
        onClear={handleClearKeyword}
        onSearch={handleSearchTask}
        labels={labels}
      />
    );
  }
);
