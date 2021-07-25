import { useAppTheme, useTasks } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useHeaderProgress = () => {
  const { theme } = useAppTheme();
  const { isLoading } = useTasks();

  return {
    theme,
    isLoading,
  } as const;
};
