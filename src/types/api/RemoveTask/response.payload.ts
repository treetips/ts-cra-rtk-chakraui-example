import { ApiErrorResponsePayload } from "../ApiErrorResponse";

/**
 * Response payload to remove one task
 * @author treetips
 */
export type RemoveTaskResponsePayload = void;

/**
 * Response callback functions to remove one task
 * @author treetips
 */
export type RemoveTaskResponseCallback = {
  success?: () => void;
  failure?: (error: ApiErrorResponsePayload) => void;
};
