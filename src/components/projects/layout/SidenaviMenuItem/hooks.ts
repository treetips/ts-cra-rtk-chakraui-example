import { useAppTheme } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useSidenaviItem = () => {
  const { theme } = useAppTheme();

  return {
    theme,
  } as const;
};
