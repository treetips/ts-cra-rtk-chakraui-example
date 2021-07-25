import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  useAppTheme,
  usePage,
  useTasks,
  useTranslate,
} from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskListEntrypoint = () => {
  const { theme } = useAppTheme();
  const location = useLocation().search;
  const { Page, getUri, getAbsoluteUrl } = usePage();
  const page = Page["task.list"];
  const { isLoading, taskEntities, resetTask, fetchTasks } = useTasks();
  const { translate } = useTranslate();
  const [keywordQueryString, setKeywordQueryString] = useState<string>();

  useEffect(() => {
    (async () => {
      const searchParam = new URLSearchParams(location);
      const queryString = searchParam.get("keyword") || undefined;
      setKeywordQueryString(queryString);
    })();
  }, [location]);

  useEffect(() => {
    (async () => {
      await fetchTasks({ keyword: keywordQueryString });
    })();
  }, [fetchTasks, keywordQueryString]);

  useEffect(() => {
    return () => {
      resetTask();
    };
  }, [resetTask]);

  return {
    theme,
    page,
    getUri,
    getAbsoluteUrl,
    keywordQueryString,
    isLoading,
    taskEntities,
    labels: {
      task: {
        information: translate("label.task.section.task-information"),
        id: translate("label.task.id"),
        title: translate("label.task.title"),
        description: translate("label.task.description"),
        status: translate("label.task.status"),
        image: translate("label.task.image"),
        actions: translate("label.actions"),
        register: translate("label.task.register"),
        search: translate("label.task.search"),
      },
    },
  } as const;
};
