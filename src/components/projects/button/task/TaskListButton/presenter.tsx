import { ButtonProps } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { memo, VFC } from "react";
import { AppButtonContainer } from "../../../../uiParts/button/AppButton";

type Props = {
  icon?: React.ReactElement;
  label: string;
  isLoading: boolean;
  onClick: () => void;
} & ButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const TaskListButton: VFC<Props> = memo(
  ({ icon, label, isLoading, onClick }) => (
    <AppButtonContainer
      leftIcon={icon ? icon : <SearchIcon />}
      isLoading={isLoading}
      onClick={onClick}
    >
      {label}
    </AppButtonContainer>
  )
);
