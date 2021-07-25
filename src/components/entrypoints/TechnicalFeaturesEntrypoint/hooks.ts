import { usePage } from "../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTechnicalFeaturesEntrypoint = () => {
  const { Page, getAbsoluteUrl } = usePage();
  const page = Page["main.technical-features"];

  return {
    page,
    getAbsoluteUrl,
  } as const;
};
