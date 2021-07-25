import { Task } from "../../entity/Task";

/**
 * Edit task form type
 * @author treetips
 */
export type TaskEditFormType = Partial<
  Record<keyof Pick<Task, "title" | "description">, string>
> &
  Pick<Task, "status">;

/**
 * Task edit validation error messages type
 * @author treetips
 */
export type TaskRegistrationFormValidationMessage = TaskEditFormType;
