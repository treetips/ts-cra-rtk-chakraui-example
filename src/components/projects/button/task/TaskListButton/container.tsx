import { memo, VFC } from "react";
import { TaskListButton, useTaskListButton } from ".";

type Props = {
  icon?: React.ReactElement;
  label?: string;
};

/**
 * Container Component
 * @author treetips
 */
export const TaskListButtonContainer: VFC<Props> = memo(
  ({ icon, label: labelProps }) => {
    const { label, isLoading, handleTaskDetail } = useTaskListButton();

    return (
      <TaskListButton
        icon={icon}
        label={labelProps || label}
        isLoading={isLoading}
        onClick={handleTaskDetail}
      />
    );
  }
);
