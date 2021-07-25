/**
 * .env
 */
export const Env = {
  FRONTEND_BASE_URL: process.env.REACT_APP_FRONTEND_BASE_URL || "",
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "",
  CORS_WITH_CREDENTIALS: process.env.REACT_APP_CORS_WITH_CREDENTIALS === "true",
  API_HEALTH_CHECK_URL: process.env.REACT_APP_API_HEALTH_CHECK_URL || "",
};
