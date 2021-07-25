import { useToast } from "@chakra-ui/react";
import { ToastConstants } from "../../../../constants";
import { TaskValidation } from "../../../../constants/form/TaskValidation";
import { useHistory, usePage, useTasks, useTranslate } from "../../../../hooks";
import { useFormValidation } from "../../../../hooks/useFormValidation";
import { TaskRegistrationFormType } from "../../../../types/form/TaskRegistration";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskRegistrationForm = () => {
  const { Page, getUri } = usePage();
  const { historyPush } = useHistory();
  const { translate } = useTranslate();
  const {
    validateRquired,
    validateMaxlength,
    validateBoolean,
    composeValidators,
  } = useFormValidation();
  const { registerTask, isLoading } = useTasks();
  const toast = useToast();

  /**
   * Register task handler
   * @param form Registration form
   */
  const handleRegisterTask = async (
    form: Required<TaskRegistrationFormType>
  ): Promise<void> => {
    await registerTask(
      { ...form, status: Boolean(form.status) },
      {
        success: () => {
          toast({
            title: translate("label.operation.successful", {
              name: translate("label.task"),
              action: translate("label.register"),
            }),
            status: "success",
            duration: ToastConstants.duration,
          });
        },
        failure: () => {
          toast({
            title: translate("label.operation.failed", {
              name: translate("label.task"),
              action: translate("label.register"),
            }),
            status: "error",
            duration: ToastConstants.duration,
          });
        },
      }
    );
    historyPush(getUri(Page["task.list"].relativeUrl));
  };

  return {
    handleValidateForm: {
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
    },
    handleRegisterTask,
    isLoading,
    labels: {
      task: {
        title: translate("label.task.title"),
        description: translate("label.task.description"),
        status: translate("label.task.status"),
      },
      button: {
        reset: translate("label.reset"),
        submit: translate("label.complete.register"),
      },
    },
  } as const;
};
