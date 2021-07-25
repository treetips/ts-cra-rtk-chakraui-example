import { TaskEntity } from "../../entity/TaskEntity";
import { ApiErrorResponsePayload } from "../ApiErrorResponse";

/**
 * Response payload to edit one task iomage
 * @author treetips
 */
export type EditTaskImageResponsePayload = {
  taskEntity: TaskEntity;
};

/**
 * Response callback functions to edit one task iomage
 * @author treetips
 */
export type EditTaskImageResponseCallback = {
  success?: ({ taskEntity }: EditTaskImageResponsePayload) => void;
  failure?: (error: ApiErrorResponsePayload) => void;
};
