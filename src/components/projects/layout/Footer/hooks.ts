import { useMemo } from "react";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useFooter = () => {
  const thisYear = useMemo(() => new Date().getFullYear(), []);

  return {
    thisYear,
  } as const;
};
