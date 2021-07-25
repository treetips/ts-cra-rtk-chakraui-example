import { Task } from "../../entity/Task";

/**
 * Request payload to register one task iomage
 * @author treetips
 */
export type RegisterTaskRequestPayload = Pick<
  Task,
  "title" | "description" | "status"
>;
