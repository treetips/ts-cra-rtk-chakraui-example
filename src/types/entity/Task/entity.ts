/**
 * Task ID
 */
export type TaskId = number;

/**
 * Task type
 * @author treetips
 */
export type Task = {
  id: TaskId;
  title: string;
  description: string;
  status: boolean;
  imageDataUri?: string;
  createdAt: Date;
  updatedAt: Date;
};
