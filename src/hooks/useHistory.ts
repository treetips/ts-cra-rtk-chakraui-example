import { useCallback } from "react";
import { history } from "../store";

/**
 * Hooks for history under redux management
 * @author treetips
 */
export const useHistory = () => {
  /**
   * hitsotry.push
   * @param url URL
   * @param state state
   */
  const historyPush = useCallback(
    (url: string, state?: { [key: string]: unknown }) => {
      history.push(url, state);
    },
    []
  );

  return {
    historyPush,
    location: history.location,
  } as const;
};
