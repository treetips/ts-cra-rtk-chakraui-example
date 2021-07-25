import { TaskId } from "../../entity/Task";

/**
 * Request payload to fetch one task
 * @author treetips
 */
export type FetchTaskRequestPayload = {
  id: TaskId;
};
