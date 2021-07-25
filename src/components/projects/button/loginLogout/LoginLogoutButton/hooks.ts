import { useLogin } from "../../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useLoginLogoutButton = () => {
  const { isLoggedIn } = useLogin();

  return {
    isLoggedIn,
  } as const;
};
