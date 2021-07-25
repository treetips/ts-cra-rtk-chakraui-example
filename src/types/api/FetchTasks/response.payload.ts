import { TaskEntity } from "../../entity/TaskEntity";
import { ApiErrorResponsePayload } from "../ApiErrorResponse";

/**
 * Response payload to fetch multiple tasks
 * @author treetips
 */
export type FetchTasksResponsePayload = {
  taskEntities: TaskEntity[] | [];
};

/**
 * Response callback functions to fetch multiple tasks
 * @author treetips
 */
export type FetchTasksResponseCallback = {
  success?: ({ taskEntities }: FetchTasksResponsePayload) => void;
  failure?: (error: ApiErrorResponsePayload) => void;
};
