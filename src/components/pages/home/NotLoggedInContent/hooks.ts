import { useTranslate } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useNotLoggedInContent = () => {
  const { translate } = useTranslate();
  return {
    labels: {
      alert: {
        title: translate("error.login.required"),
        description: translate("label.page.description"),
      },
      source: translate("label.source"),
    },
  } as const;
};
