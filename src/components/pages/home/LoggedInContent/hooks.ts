import { useTranslate } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useLoggedInContent = () => {
  const { translate } = useTranslate();
  return {
    labels: {
      alertMessage: translate("label.now-logged-in"),
      source: translate("label.source"),
    },
  } as const;
};
