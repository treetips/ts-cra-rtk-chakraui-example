import { useAppTheme } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useDarkModeButton = () => {
  const { appTheme } = useAppTheme();

  /**
   * Dark mode handler
   */
  const handleMode = () => {
    appTheme.toggleTheme();
  };

  return {
    colorMode: appTheme.colorMode,
    handleMode,
  } as const;
};
