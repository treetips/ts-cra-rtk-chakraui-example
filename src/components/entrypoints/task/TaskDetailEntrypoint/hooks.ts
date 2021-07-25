import { useEffect } from "react";
import { useParams } from "react-router";
import { useHistory, usePage, useTasks, useTranslate } from "../../../../hooks";
import { TaskIdUrlParams } from "../../../../types/url/param/TaskId";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskDetailEntrypoint = () => {
  const { Page, getAbsoluteUrl, getUri } = usePage();
  const taskListPage = Page["task.list"];
  const taskDetailPage = Page["task.detail"];
  const errorPage = Page["error.error"];
  const { isLoading, error, taskEntity, resetTask, convertTaskId, fetchTask } =
    useTasks();
  const { id } = useParams<TaskIdUrlParams>();
  const { taskId, convertError } = convertTaskId({ id });
  const { translate } = useTranslate();
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
    errorPage,
    getAbsoluteUrl,
    getUri,
    historyPush,
    isLoading,
    error,
    taskEntity,
    taskId,
    convertError,
    labels: {
      section: {
        image: translate("label.task.section.image"),
        basicInfo: translate("label.task.section.basic-information"),
      },
      id: translate("label.task.id"),
      title: translate("label.task.title"),
      description: translate("label.task.description"),
      status: translate("label.task.status"),
      image: translate("label.task.image"),
      createdAt: translate("label.create-time"),
      updatedAt: translate("label.update-time"),
    },
  } as const;
};
