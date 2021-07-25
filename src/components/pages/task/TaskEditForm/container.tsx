import { memo, VFC } from "react";
import { TaskEditForm, useTaskEditForm } from ".";
import { TaskValidation } from "../../../../constants/form/TaskValidation";
import { useTranslate } from "../../../../hooks";
import { useFormValidation } from "../../../../hooks/useFormValidation";
import { TaskEntity } from "../../../../types/entity/TaskEntity";
import { TaskEditFormType } from "../../../../types/form/TaskEdit";

type Props = {
  taskEntity: TaskEntity;
};

/**
 * Container Component
 * @author treetips
 */
export const TaskEditFormContainer: VFC<Props> = memo(({ taskEntity }) => {
  const { isLoading, handleEditTask } = useTaskEditForm(taskEntity.id);
  const { translate } = useTranslate();
  const {
    validateRquired,
    validateMaxlength,
    validateBoolean,
    composeValidators,
  } = useFormValidation();

  const formInitialValue: TaskEditFormType = {
    title: taskEntity.title,
    description: taskEntity.description,
    status: taskEntity.status,
  };

  return (
    <TaskEditForm
      formInitialValue={formInitialValue}
      isLoading={isLoading}
      labels={{
        task: {
          title: translate("label.task.title"),
          description: translate("label.task.description"),
          status: translate("label.task.status"),
        },
        button: {
          reset: translate("label.reset"),
          submit: translate("label.complete.edit"),
        },
      }}
      onValidateForm={{
        title: composeValidators(
          validateRquired(
            translate("validation.required", {
              name: translate("label.task.title"),
            })
          ),
          validateMaxlength(
            TaskValidation.title.max,
            translate("validation.max", {
              name: translate("label.task.title"),
              number: TaskValidation.title.max,
            })
          )
        ),
        description: composeValidators(
          validateRquired(
            translate("validation.required", {
              name: translate("label.task.description"),
            })
          ),
          validateMaxlength(
            TaskValidation.description.max,
            translate("validation.max", {
              name: translate("label.task.description"),
              number: TaskValidation.description.max,
            })
          )
        ),
        status: composeValidators(
          validateBoolean(
            translate("validation.boolean", {
              name: translate("label.task.status"),
            })
          )
        ),
      }}
      onSubmit={handleEditTask}
    />
  );
});
