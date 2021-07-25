import { Task } from "../../entity/Task";

/**
 * Task search form type
 * @author treetips
 */
export type TaskSearchForm = Partial<Pick<Task, "title">>;
