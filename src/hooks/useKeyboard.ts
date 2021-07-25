import { useCallback } from "react";

/**
 * Hooks for keyboard
 * @author treetips
 */
export const useKeyboard = () => {
  /**
   * Enter key handler
   * @param key keyboard key code
   * @param callback callback function
   */
  const onEnter = useCallback((key: string, callback: Function): void => {
    if (key === "Enter") {
      callback();
    }
  }, []);

  return {
    onEnter,
  } as const;
};
