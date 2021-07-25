import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { useLocation } from "react-router";
import { usePage, useTranslate } from "../../../hooks";
import { ErrorAlertType } from "../../../types";
import { LoginLocationState } from "../../../types/url/state/LoginLocationState";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useErrorEntrypoint = () => {
  const { translate } = useTranslate();
  const { Page, getAbsoluteUrl } = usePage();
  const page = Page["error.error"];
  const { state } = useLocation<LoginLocationState>();
  const statusCode = state?.statusCode || StatusCodes.NOT_FOUND;
  const phrase = getReasonPhrase(statusCode);
  const statusCodeMessage = `${statusCode} ${phrase}`;

  const alertValue = ((): ErrorAlertType => {
    switch (statusCode) {
      case StatusCodes.NOT_FOUND:
        return {
          type: "warning",
          title: translate("error.page.notfound"),
        };
      case StatusCodes.SERVICE_UNAVAILABLE:
        if (state.networkError === true) {
          return {
            type: "error",
            title: translate("error.healthcheck"),
          };
        }
        return {
          type: "error",
          title: translate("error.service-unavailable"),
        };
      case StatusCodes.INTERNAL_SERVER_ERROR:
        return {
          type: "error",
          title: translate("error.internal-server-error"),
        };
      default:
        return {
          type: "warning",
          title: translate("error.unknown-error"),
        };
    }
  })();

  return {
    page,
    getAbsoluteUrl,
    alertValue,
    labels: {
      pageTitle: translate("label.page.title"),
      message: translate("label.source"),
      statusCodeMessage,
    },
  } as const;
};
