import { ButtonProps } from "@chakra-ui/button";
import { EditIcon } from "@chakra-ui/icons";
import { memo, VFC } from "react";
import { AppButtonContainer } from "../../../../uiParts/button/AppButton";

type Props = {
  label: string;
  isLoading: boolean;
  onClick: () => void;
} & ButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const TaskEditButton: VFC<Props> = memo(
  ({ label, isLoading, onClick }) => (
    <AppButtonContainer
      leftIcon={<EditIcon />}
      isLoading={isLoading}
      onClick={onClick}
    >
      {label}
    </AppButtonContainer>
  )
);
