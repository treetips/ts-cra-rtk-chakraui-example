import { useEffect } from "react";
import { usePage, useTasks } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskRegistrationEntrypoint = () => {
  const { Page, getUri, getAbsoluteUrl } = usePage();
  const page = Page["task.register"];
  const { resetTask } = useTasks();

  useEffect(() => {
    return () => {
      resetTask();
    };
  }, [resetTask]);

  return {
    page,
    getUri,
    getAbsoluteUrl,
  } as const;
};
