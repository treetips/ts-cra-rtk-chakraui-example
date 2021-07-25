import { useCallback, useMemo } from "react";
import {
  useHistory,
  useLogin,
  usePage,
  useTranslate,
} from "../../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useLogoutButton = () => {
  const { logout } = useLogin();
  const { getUri, Page } = usePage();
  const homePage = Page["main.home"];
  const { historyPush } = useHistory();
  const { translate } = useTranslate();

  /**
   * Logout handler
   */
  const handleLogout = useCallback(async () => {
    await logout();
    historyPush(getUri(homePage.relativeUrl));
  }, [getUri, historyPush, homePage.relativeUrl, logout]);

  const label = useMemo(() => translate("label.logout"), [translate]);

  return {
    label,
    handleLogout,
  } as const;
};
