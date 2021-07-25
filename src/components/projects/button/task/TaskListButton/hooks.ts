import {
  useHistory,
  usePage,
  useTasks,
  useTranslate,
} from "../../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskListButton = () => {
  const { historyPush } = useHistory();
  const { Page, getUri } = usePage();
  const { isLoading } = useTasks();
  const { translate } = useTranslate();

  /**
   * Detail task handler
   */
  const handleTaskDetail = () => {
    historyPush(getUri(Page["task.list"].relativeUrl));
  };

  return {
    label: translate("label.list"),
    isLoading,
    handleTaskDetail,
  } as const;
};
