import { ButtonProps } from "@chakra-ui/button";
import { ColorMode } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AppIconButtonContainer } from "../../../uiParts/button/AppIconButton";

type Props = {
  colorMode: ColorMode;
  onClick: () => void;
} & ButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const DarkModeButton: VFC<Props> = memo(({ colorMode, onClick }) => (
  <AppIconButtonContainer
    icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    aria-label={colorMode === "dark" ? "Light Theme" : "Dark Theme"}
    onClick={onClick}
  />
));
