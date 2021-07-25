import { useCallback } from "react";
import { useIntl } from "react-intl";
import { TranslateMessageKeys } from "../types";

/**
 * Hooks for translate
 * @author treetips
 */
export const useTranslate = () => {
  const { formatMessage } = useIntl();

  /**
   * Execute translate
   */
  const translate = useCallback(
    (
      id: TranslateMessageKeys,
      placeholders?: { [name: string]: string | number | boolean | Date }
    ): string => {
      return formatMessage({ id }, placeholders);
    },
    [formatMessage]
  );

  return {
    translate,
  } as const;
};
