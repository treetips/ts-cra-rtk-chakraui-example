import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useRouterEventConfig = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return {} as const;
};
