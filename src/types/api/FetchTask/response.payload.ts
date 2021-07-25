import { TaskEntity } from "../../entity/TaskEntity";
import { ApiErrorResponsePayload } from "../ApiErrorResponse";

/**
 * Response payload to fetch one task
 * @author treetips
 */
export type FetchTaskResponsePayload = {
  taskEntity: TaskEntity;
};

/**
 * Response callback functions to fetch one task
 * @author treetips
 */
export type FetchTaskResponseCallback = {
  success?: ({ taskEntity }: FetchTaskResponsePayload) => void;
  failure?: (error: ApiErrorResponsePayload) => void;
};
