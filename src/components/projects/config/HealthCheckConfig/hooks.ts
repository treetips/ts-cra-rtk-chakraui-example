import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Env } from "../../../../types";
import { HealthCheckResponsePayload } from "../../../../types/api/HealthCheck";
import { axios } from "../AxiosConfig";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useHealthCheckConfig = () => {
  useEffect(() => {
    const url = Env.API_HEALTH_CHECK_URL;
    axios.get(url).then((_: AxiosResponse<HealthCheckResponsePayload>) => {});
  }, []);

  return {} as const;
};
