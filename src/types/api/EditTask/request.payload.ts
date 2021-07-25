import { Task } from "../../entity/Task";

/**
 * Request payload to edit one task
 * @author treetips
 */
export type EditTaskRequestPayload = Pick<
  Task,
  "id" | "title" | "description" | "status"
>;
