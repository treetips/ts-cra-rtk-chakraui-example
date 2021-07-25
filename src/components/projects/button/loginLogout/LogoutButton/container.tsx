import { memo, VFC } from "react";
import { LogoutButton, useLogoutButton } from ".";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const LogoutButtonContainer: VFC<Props> = memo(() => {
  const { label, handleLogout } = useLogoutButton();

  return <LogoutButton onLogout={handleLogout}>{label}</LogoutButton>;
});
