import { KeyboardEvent, useCallback } from "react";
import {
  useHistory,
  useInputText,
  useKeyboard,
  usePage,
  useTasks,
  useTranslate,
} from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskSearchForm = (args: { keywordQueryString?: string }) => {
  const { keywordQueryString } = args;
  const { Page, getUri } = usePage();
  const { historyPush } = useHistory();
  const { translate } = useTranslate();
  const { onEnter } = useKeyboard();
  const { fetchTasks } = useTasks();
  const [keyword, { handleInputText: handleKeyword, clearInputText }] =
    useInputText({ initialState: keywordQueryString });

  /**
   * Search task handler
   * @param keyword Keyword
   */
  const handleSearchTask = useCallback(
    async (keyword?: string) => {
      if (keyword) {
        historyPush(
          getUri(Page["task.list"].relativeUrl) +
            `?keyword=${encodeURIComponent(keyword)}`
        );
      } else {
        historyPush(getUri(Page["task.list"].relativeUrl));
      }
      await fetchTasks({ keyword });
    },
    [Page, fetchTasks, getUri, historyPush]
  );

  /**
   * Enter key handler
   * @param e keyboard event
   */
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    onEnter(e.code, () => {
      handleSearchTask(keyword);
    });
  };

  /**
   * Clear keyword handler
   */
  const handleClearKeyword = (): void => {
    clearInputText();
  };

  return {
    keyword,
    handleKeyword,
    handleSearchTask,
    handleEnter,
    handleClearKeyword,
    labels: {
      search: {
        placeholder: translate("label.task.search.required"),
        tooltip: translate("label.task.search.description"),
      },
    },
  } as const;
};
