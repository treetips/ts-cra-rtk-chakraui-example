import { memo, VFC } from "react";
import { TaskImageEditButton, useTaskImageEditButton } from ".";
import { TaskId } from "../../../../../types/entity/Task";

type Props = {
  id: TaskId;
};

/**
 * Container Component
 * @author treetips
 */
export const TaskImageEditButtonContainer: VFC<Props> = memo(({ id }) => {
  const {
    theme,
    isOpen,
    onOpen,
    onClose,
    isLoading,
    taskImagePreviewSrc,
    handleTaskPreviewImage,
    handleEditTaskImage,
    labels,
  } = useTaskImageEditButton(id);

  return (
    <TaskImageEditButton
      theme={theme}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      isLoading={isLoading}
      taskImagePreviewSrc={taskImagePreviewSrc}
      onPreviewTaskImage={handleTaskPreviewImage}
      onEditTaskImage={handleEditTaskImage}
      labels={labels}
    />
  );
});
