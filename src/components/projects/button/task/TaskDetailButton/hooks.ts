import {
  useHistory,
  usePage,
  useTasks,
  useTranslate,
} from "../../../../../hooks";
import { TaskId } from "../../../../../types/entity/Task";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskDetailButton = (id: TaskId) => {
  const { historyPush } = useHistory();
  const { Page, getUri } = usePage();
  const { isLoading } = useTasks();
  const { translate } = useTranslate();

  /**
   * Task detail handler
   */
  const handleTaskDetail = () => {
    historyPush(getUri(Page["task.detail"].relativeUrl, id));
  };

  return {
    label: translate("label.detail"),
    isLoading,
    handleTaskDetail,
  } as const;
};
