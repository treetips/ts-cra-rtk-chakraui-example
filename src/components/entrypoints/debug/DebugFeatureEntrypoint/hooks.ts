import { usePage } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useDebugFeatureEntrypoint = () => {
  const { Page, getAbsoluteUrl } = usePage();
  const page = Page["debug.feature"];

  return {
    page,
    getAbsoluteUrl,
  } as const;
};
