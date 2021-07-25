import { Task } from "../../entity/Task";

/**
 * Request payload to edit one task iomage
 * @author treetips
 */
export type EditTaskImageRequestPayload = Pick<Task, "id"> & {
  imageDataUri: string;
};
