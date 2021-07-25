import { useHistory, usePage, useTasks, useTranslate } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useHomeButton = () => {
  const { historyPush } = useHistory();
  const { Page, getUri } = usePage();
  const { isLoading } = useTasks();
  const { translate } = useTranslate();

  /**
   * Home handler
   */
  const handleHome = () => {
    historyPush(getUri(Page["main.home"].relativeUrl));
  };

  return {
    isLoading,
    handleHome,
    label: translate("label.home"),
  } as const;
};
