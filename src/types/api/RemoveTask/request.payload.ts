import { Task } from "../../entity/Task";

/**
 * Request payload to remove one task iomage
 * @author treetips
 */
export type RemoveTaskRequestPayload = Pick<Task, "id">;
