import { ButtonProps } from "@chakra-ui/button";
import { memo, VFC } from "react";
import { MdHome } from "react-icons/md";
import { AppButtonContainer } from "../../../uiParts/button/AppButton";

type Props = {
  label: string;
  isLoading: boolean;
  onClick: () => void;
} & ButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const HomeButton: VFC<Props> = memo(({ label, isLoading, onClick }) => (
  <AppButtonContainer
    leftIcon={<MdHome />}
    isLoading={isLoading}
    onClick={onClick}
  >
    {label}
  </AppButtonContainer>
));
