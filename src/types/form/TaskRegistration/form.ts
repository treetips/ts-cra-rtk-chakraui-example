import { Task } from "../../entity/Task";

/**
 * Task registration form type
 * @author treetips
 */
export type TaskRegistrationFormType = Partial<
  Record<keyof Pick<Task, "title" | "description">, string>
> &
  Pick<Task, "status">;

/**
 * InitialState of task registration form type
 * @author treetips
 */
export const taskRegistrationFormInitialValue: TaskRegistrationFormType = {
  title: undefined,
  description: undefined,
  status: false,
};

/**
 * Task registration validation error messages type
 * @author treetips
 */
export type TaskRegistrationFormValidationMessage = TaskRegistrationFormType;
