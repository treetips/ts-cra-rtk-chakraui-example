import Cookie from "js-cookie";
import { useCallback } from "react";
import { AppCookie, convertToLanguageType, LanguageType } from "../types";

/**
 * Hooks for language
 * @author treetips
 */
export const useLanguage = () => {
  /**
   * Set language
   * @param langugeCode language code (ex) "en-US"
   */
  const setLanguage = useCallback((langugeCode: string): void => {
    Cookie.set(AppCookie.language.name, langugeCode, {
      sameSite: "Lax",
    });
  }, []);

  /**
   * Get language
   */
  const getLanguage = useCallback((): LanguageType => {
    const cookieLanguageCode = Cookie.get(AppCookie.language.name);
    return convertToLanguageType(cookieLanguageCode);
  }, []);

  return {
    getLanguage,
    setLanguage,
  } as const;
};
