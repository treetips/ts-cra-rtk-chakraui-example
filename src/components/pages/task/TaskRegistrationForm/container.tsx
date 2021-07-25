import { memo, VFC } from "react";
import { TaskRegistrationForm, useTaskRegistrationForm } from ".";
import { taskRegistrationFormInitialValue } from "../../../../types/form/TaskRegistration";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const TaskRegistrationFormContainer: VFC<Props> = memo(() => {
  const { handleValidateForm, handleRegisterTask, isLoading, labels } =
    useTaskRegistrationForm();

  return (
    <TaskRegistrationForm
      formInitialValue={taskRegistrationFormInitialValue}
      onValidateForm={handleValidateForm}
      onSubmit={handleRegisterTask}
      isLoading={isLoading}
      labels={labels}
    />
  );
});
