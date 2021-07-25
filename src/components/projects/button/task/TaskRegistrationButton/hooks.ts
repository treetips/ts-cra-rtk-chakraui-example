import {
  useHistory,
  usePage,
  useTasks,
  useTranslate,
} from "../../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskRegistrationButton = () => {
  const { historyPush } = useHistory();
  const { Page, getUri } = usePage();
  const { isLoading } = useTasks();
  const { translate } = useTranslate();

  /**
   * Register task handler
   */
  const handleTaskRegister = () => {
    historyPush(getUri(Page["task.register"].relativeUrl));
  };

  return {
    label: translate("label.register"),
    isLoading,
    handleTaskRegister,
  } as const;
};
