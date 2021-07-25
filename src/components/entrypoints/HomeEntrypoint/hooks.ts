import { useLogin, usePage, useTranslate } from "../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useHomeEntrypoint = () => {
  const { Page, getAbsoluteUrl } = usePage();
  const page = Page["main.home"];
  const { isLoggedIn } = useLogin();
  const { translate } = useTranslate();

  return {
    page,
    getAbsoluteUrl,
    isLoggedIn,
    labels: {
      pageTitle: translate("label.page.title"),
    },
  } as const;
};
