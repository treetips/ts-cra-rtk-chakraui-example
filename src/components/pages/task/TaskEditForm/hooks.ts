import { useToast } from "@chakra-ui/react";
import { ToastConstants } from "../../../../constants";
import { useHistory, usePage, useTasks, useTranslate } from "../../../../hooks";
import { TaskId } from "../../../../types/entity/Task";
import { TaskEditFormType } from "../../../../types/form/TaskEdit";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskEditForm = (id: TaskId) => {
  const { Page, getUri } = usePage();
  const { historyPush } = useHistory();
  const { translate } = useTranslate();
  const { editTask, isLoading } = useTasks();
  const toast = useToast();

  /**
   * Edit task handler
   * @param form Edit form
   */
  const handleEditTask = async (
    form: Required<TaskEditFormType>
  ): Promise<void> => {
    await editTask(
      { id, ...form, status: Boolean(form.status) },
      {
        success: () => {
          toast({
            title: translate("label.operation.successful", {
              name: translate("label.task"),
              action: translate("label.edit"),
            }),
            status: "success",
            duration: ToastConstants.duration,
          });
        },
        failure: () => {
          toast({
            title: translate("label.operation.failed", {
              name: translate("label.task"),
              action: translate("label.edit"),
            }),
            status: "error",
            duration: ToastConstants.duration,
          });
        },
      }
    );
    historyPush(getUri(Page["task.list"].relativeUrl));
  };

  return {
    isLoading,
    handleEditTask,
  } as const;
};
