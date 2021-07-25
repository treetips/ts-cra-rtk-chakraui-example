import { memo, VFC } from "react";
import { TaskRemoveButton, useTaskRemoveButton } from ".";
import { TaskId } from "../../../../../types/entity/Task";

type Props = {
  id: TaskId;
};

/**
 * Container Component
 * @author treetips
 */
export const TaskRemoveButtonContainer: VFC<Props> = memo(({ id }) => {
  const { isOpen, onOpen, onClose, isLoading, handleRemoveTask, labels } =
    useTaskRemoveButton(id);

  return (
    <TaskRemoveButton
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      isLoading={isLoading}
      onRemoveTask={handleRemoveTask}
      labels={labels}
    />
  );
});
