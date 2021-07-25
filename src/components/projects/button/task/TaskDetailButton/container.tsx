import { memo, VFC } from "react";
import { TaskDetailButton, useTaskDetailButton } from ".";
import { TaskId } from "../../../../../types/entity/Task";

type Props = {
  id: TaskId;
};

/**
 * Container Component
 * @author treetips
 */
export const TaskDetailButtonContainer: VFC<Props> = memo(({ id }) => {
  const { label, isLoading, handleTaskDetail } = useTaskDetailButton(id);

  return (
    <TaskDetailButton
      label={label}
      isLoading={isLoading}
      onClick={handleTaskDetail}
    />
  );
});
