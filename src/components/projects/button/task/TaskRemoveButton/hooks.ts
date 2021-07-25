import { useDisclosure, useToast } from "@chakra-ui/react";
import { ToastConstants } from "../../../../../constants";
import { useTasks, useTranslate } from "../../../../../hooks";
import { TaskId } from "../../../../../types/entity/Task";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskRemoveButton = (id: TaskId) => {
  const { isLoading, removeTask } = useTasks();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { translate } = useTranslate();
  const toast = useToast();

  /**
   * Remove task handler
   */
  const handleRemoveTask = () => {
    (async () => {
      await removeTask(
        { id },
        {
          success: () => {
            toast({
              title: translate("label.operation.successful", {
                name: translate("label.task"),
                action: translate("label.remove"),
              }),
              status: "success",
              duration: ToastConstants.duration,
            });
          },
          failure: () => {
            toast({
              title: translate("label.operation.failed", {
                name: translate("label.task"),
                action: translate("label.remove"),
              }),
              status: "error",
              duration: ToastConstants.duration,
            });
          },
        }
      );
    })();
  };

  return {
    isOpen,
    onOpen,
    onClose,
    isLoading,
    handleRemoveTask,
    labels: {
      buttonLabel: translate("label.remove"),
      modalTitle: translate("label.task.remove"),
      modalDescription: translate("label.task.remove.confirm", {
        id,
      }),
      modalOk: translate("label.complete.remove"),
      modalCancel: translate("label.cancel"),
    },
  } as const;
};
