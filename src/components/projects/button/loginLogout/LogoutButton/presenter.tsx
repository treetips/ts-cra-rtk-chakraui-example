import { ButtonProps } from "@chakra-ui/button";
import { FC, memo } from "react";
import { IoLogOut } from "react-icons/io5";
import { AppButtonContainer } from "../../../../uiParts/button/AppButton";

type Props = {
  onLogout: () => void;
} & ButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const LogoutButton: FC<Props> = memo(({ children, onLogout }) => (
  <AppButtonContainer leftIcon={<IoLogOut size={25} />} onClick={onLogout}>
    {children}
  </AppButtonContainer>
));
