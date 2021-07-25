import { TaskEntity } from "../../entity/TaskEntity";
import { ApiErrorResponsePayload } from "../ApiErrorResponse";

/**
 * Response payload to register one task
 * @author treetips
 */
export type RegisterTaskResponsePayload = {
  taskEntity: TaskEntity;
};

/**
 * Response callback functions to register one task
 * @author treetips
 */
export type RegisterTaskResponseCallback = {
  success?: ({ taskEntity }: RegisterTaskResponsePayload) => void;
  failure?: (error: ApiErrorResponsePayload) => void;
};
