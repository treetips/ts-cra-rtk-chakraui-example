import { useEffect } from "react";
import { useParams } from "react-router";
import { useHistory, usePage, useTasks } from "../../../../hooks";
import { TaskIdUrlParams } from "../../../../types/url/param/TaskId";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskEditEntrypoint = () => {
  const { Page, getUri, getAbsoluteUrl } = usePage();
  const taskListPage = Page["task.list"];
  const taskDetailPage = Page["task.detail"];
  const taskEditPage = Page["task.edit"];
  const errorPage = Page["error.error"];
  const { isLoading, error, taskEntity, resetTask, convertTaskId, fetchTask } =
    useTasks();
  const { id } = useParams<TaskIdUrlParams>();
  const { taskId, convertError } = convertTaskId({ id });
  const { historyPush } = useHistory();

  useEffect(() => {
    (async () => {
      if (taskId) {
        await fetchTask({ id: taskId });
      }
    })();
  }, [fetchTask, taskId]);

  useEffect(() => {
    return () => {
      resetTask();
    };
  }, [resetTask]);

  return {
    taskListPage,
    taskDetailPage,
    taskEditPage,
    errorPage,
    getUri,
    getAbsoluteUrl,
    historyPush,
    isLoading,
    error,
    taskEntity,
    taskId,
    convertError,
  } as const;
};
