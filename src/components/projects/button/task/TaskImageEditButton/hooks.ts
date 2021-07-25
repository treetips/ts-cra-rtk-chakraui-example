import { useDisclosure, useToast } from "@chakra-ui/react";
import { ChangeEvent, useCallback, useState } from "react";
import { ToastConstants } from "../../../../../constants";
import { useAppTheme, useTasks, useTranslate } from "../../../../../hooks";
import { TaskId } from "../../../../../types/entity/Task";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskImageEditButton = (id: TaskId) => {
  const { theme } = useAppTheme();
  const { isLoading, editTaskImage } = useTasks();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { translate } = useTranslate();
  const toast = useToast();

  const [taskImagePreviewSrc, setTaskImagePreviewSrc] = useState<string>();
  const [taskImageDataUri, setTaskImageDataUri] = useState<string>();

  /**
   * Task preview image handler
   */
  const handleTaskPreviewImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const imageFormFile: File = e.target?.files?.item(0)!;
      // preview image
      const previewSrc = window.URL.createObjectURL(imageFormFile);
      setTaskImagePreviewSrc(previewSrc);

      // File to data-uri
      const fileReader = new FileReader();
      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        const dataUri = e.target?.result?.toString();
        dataUri && setTaskImageDataUri(dataUri);
      };
      fileReader.readAsDataURL(imageFormFile);
    },
    []
  );

  /**
   * Edit task image handler
   */
  const handleEditTaskImage = () => {
    (async () => {
      taskImageDataUri &&
        (await editTaskImage(
          { id, imageDataUri: taskImageDataUri },
          {
            success: () => {
              toast({
                title: translate("label.operation.successful", {
                  name: translate("label.task.image"),
                  action: translate("label.edit"),
                }),
                status: "success",
                duration: ToastConstants.duration,
              });
            },
            failure: () => {
              toast({
                title: translate("label.operation.failed", {
                  name: translate("label.task.image"),
                  action: translate("label.edit"),
                }),
                status: "error",
                duration: ToastConstants.duration,
              });
            },
          }
        ));
    })();
  };

  return {
    theme,
    isOpen,
    onOpen,
    onClose,
    isLoading,
    taskImagePreviewSrc,
    handleEditTaskImage,
    handleTaskPreviewImage,
    labels: {
      buttonLabel: translate("label.edit"),
      modalTitle: translate("label.task.edit"),
      modalDescription: translate("label.task.remove.confirm", {
        id,
      }),
      modalOk: translate("label.complete.edit"),
      modalCancel: translate("label.cancel"),
    },
  } as const;
};
