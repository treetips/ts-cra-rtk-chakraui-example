import { useCallback } from "react";
import { useAppTheme, useLanguage } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useLanguageSelection = () => {
  const { setLanguage, getLanguage } = useLanguage();
  const language = getLanguage();
  const { theme } = useAppTheme();

  /**
   * Language handler
   */
  const handleLanguage = useCallback(
    (languageCode: string) => {
      setLanguage(languageCode);
      window.location.reload();
    },
    [setLanguage]
  );

  return {
    theme,
    language,
    handleLanguage,
  } as const;
};
