import { useAppTheme } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useSectioneader = () => {
  const { theme } = useAppTheme();

  return {
    theme,
  } as const;
};
