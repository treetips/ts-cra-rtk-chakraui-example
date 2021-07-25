import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { StatusCodes } from "http-status-codes";
import { memo, VFC } from "react";
import { AxiosConfig, useAxiosConfig } from ".";
import { Env } from "../../../../types";
import { ApiErrorResponsePayload } from "../../../../types/api/ApiErrorResponse";
import { LoginLocationState } from "../../../../types/url/state/LoginLocationState";

type Props = {};

const appAxios = Axios.create({
  baseURL: Env.API_BASE_URL,
  timeout: 30000,
  maxRedirects: 3,
  maxContentLength: 1024 * 100,
});

/**
 * Container Component
 * @author treetips
 */
export const AxiosConfigContainer: VFC<Props> = memo(() => {
  const { mainPage, errorPage, getUri, accessToken, logout, historyPush } =
    useAxiosConfig();

  appAxios.interceptors.request.use((config: AxiosRequestConfig) => {
    config.withCredentials = Env.CORS_WITH_CREDENTIALS;
    config.headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  });

  appAxios.interceptors.response.use(
    async (response: AxiosResponse) => response,
    async (error: AxiosError<ApiErrorResponsePayload>) => {
      const response = error.response;

      // Handle Network Error
      if (!response) {
        const state: LoginLocationState = {
          statusCode: StatusCodes.SERVICE_UNAVAILABLE,
          networkError: true,
        };
        historyPush(getUri(errorPage.relativeUrl), state);
        return Promise.reject(error);
      }

      const statusCode = response.status;
      const state: LoginLocationState = {
        statusCode: statusCode,
        networkError: false,
      };

      switch (statusCode) {
        case StatusCodes.UNAUTHORIZED: {
          await logout();
          historyPush(getUri(mainPage.relativeUrl), state);
          return Promise.reject(error);
        }
        default: {
          return Promise.reject(error);
        }
      }
    }
  );

  return <AxiosConfig />;
});

export const axios = appAxios;
