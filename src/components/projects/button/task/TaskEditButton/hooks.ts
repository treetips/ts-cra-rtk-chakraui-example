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
export const useTaskEditButton = (id: TaskId) => {
  const { historyPush } = useHistory();
  const { Page, getUri } = usePage();
  const { isLoading } = useTasks();
  const { translate } = useTranslate();

  /**
   * edit task handler
   */
  const handleTaskEdit = () => {
    historyPush(getUri(Page["task.edit"].relativeUrl, id));
  };

  return {
    label: translate("label.edit"),
    isLoading,
    handleTaskEdit,
  } as const;
};
