import { useHistory, useLogin, usePage } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useAxiosConfig = () => {
  const { Page, getUri } = usePage();
  const mainPage = Page["main.home"];
  const errorPage = Page["error.error"];
  const { getAccessToken, logout } = useLogin();
  const { historyPush } = useHistory();

  return {
    mainPage,
    errorPage,
    getUri,
    accessToken: getAccessToken(),
    logout,
    historyPush,
  } as const;
};
