import { memo, VFC } from "react";
import { LoginLogoutButton, useLoginLogoutButton } from ".";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const LoginLogoutButtonContainer: VFC<Props> = memo(() => {
  const { isLoggedIn } = useLoginLogoutButton();

  return <LoginLogoutButton isLoggedIn={isLoggedIn} />;
});
