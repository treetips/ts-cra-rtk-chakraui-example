import { ButtonProps } from "@chakra-ui/button";
import { memo, VFC } from "react";
import { LoginButtonContainer } from "../LoginButton";
import { LogoutButtonContainer } from "../LogoutButton";

type Props = {
  isLoggedIn: boolean;
} & ButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const LoginLogoutButton: VFC<Props> = memo(({ isLoggedIn }) => (
  <>{isLoggedIn ? <LogoutButtonContainer /> : <LoginButtonContainer />}</>
));
