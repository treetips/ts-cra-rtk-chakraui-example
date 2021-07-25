import { memo, VFC } from "react";
import { TaskEditButton, useTaskEditButton } from ".";
import { TaskId } from "../../../../../types/entity/Task";

type Props = {
  id: TaskId;
};

/**
 * Container Component
 * @author treetips
 */
export const TaskEditButtonContainer: VFC<Props> = memo(({ id }) => {
  const { label, isLoading, handleTaskEdit } = useTaskEditButton(id);

  return (
    <TaskEditButton
      label={label}
      isLoading={isLoading}
      onClick={handleTaskEdit}
    />
  );
});
