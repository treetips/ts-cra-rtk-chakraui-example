import { TaskEntity } from "../../entity/TaskEntity";
import { ApiErrorResponsePayload } from "../ApiErrorResponse";

/**
 * Response payload to edit one task
 * @author treetips
 */
export type EditTaskResponsePayload = {
  taskEntity: TaskEntity;
};

/**
 * Response callback function to edit one task
 * @author treetips
 */
export type EditTaskResponseCallback = {
  success?: ({ taskEntity }: EditTaskResponsePayload) => void;
  failure?: (error: ApiErrorResponsePayload) => void;
};
