import { memo, VFC } from "react";
import { TaskRegistrationButton, useTaskRegistrationButton } from ".";

type Props = {
  icon?: React.ReactElement;
  label?: string;
};

/**
 * Container Component
 * @author treetips
 */
export const TaskRegistrationButtonContainer: VFC<Props> = memo(
  ({ icon, label: labelProps }) => {
    const { label, isLoading, handleTaskRegister } =
      useTaskRegistrationButton();

    return (
      <TaskRegistrationButton
        icon={icon}
        label={labelProps || label}
        isLoading={isLoading}
        onClick={handleTaskRegister}
      />
    );
  }
);
