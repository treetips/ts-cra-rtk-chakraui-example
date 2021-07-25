import Cookie from "js-cookie";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  hideLoginFormAction,
  loginAction,
  loginSelector,
  logoutAction,
  showLoginFormAction,
} from "../store/login";
import { AppCookie } from "../types";
import { useAppDispatch } from "./useAppDispatch";
import { useHistory } from "./useHistory";
import { usePage } from "./usePage";

/**
 * Hooks for login
 * @author treetips
 */
export const useLogin = () => {
  const { dispatch } = useAppDispatch();
  const { Page, getUri } = usePage();
  const { historyPush } = useHistory();
  const loginState = useSelector(loginSelector);

  /**
   * Get access token
   */
  const getAccessToken = useCallback((): string | undefined => {
    return Cookie.get(AppCookie.accessToken.name);
  }, []);

  /**
   * Execute logout
   */
  const logout = useCallback(async (): Promise<void> => {
    dispatch(logoutAction());
    Cookie.remove(AppCookie.accessToken.name);
    historyPush(getUri(Page["main.home"].relativeUrl));
  }, [Page, dispatch, getUri, historyPush]);

  /**
   * Set logged in
   */
  const setLoggedIn = useCallback(async (): Promise<void> => {
    if (getAccessToken()) {
      dispatch(loginAction());
    }
  }, [dispatch, getAccessToken]);

  /**
   * Execute login
   */
  const login = useCallback(async (): Promise<void> => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 30);
    Cookie.set(AppCookie.accessToken.name, "dummy-token", {
      sameSite: "Lax",
      expires,
    });
    await setLoggedIn();
  }, [setLoggedIn]);

  /**
   * Show login form modal
   */
  const showLoginForm = useCallback(() => {
    dispatch(showLoginFormAction());
  }, [dispatch]);

  /**
   * Hide login form modal
   */
  const hideLoginForm = useCallback(() => {
    dispatch(hideLoginFormAction());
  }, [dispatch]);

  return {
    login,
    logout,
    isLoggedIn: loginState.isLoggedIn,
    setLoggedIn,
    getAccessToken,
    showLoginForm,
    hideLoginForm,
  } as const;
};
