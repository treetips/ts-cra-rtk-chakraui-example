import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { FC, memo } from "react";
import { AppThemeType } from "../../../../hooks";

type Props = {
  theme: AppThemeType;
} & IconButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const AppIconButton: FC<Props> = memo((props) => {
  const { children, theme, ...buttonProps } = props;
  return (
    <IconButton
      variant="solid"
      colorScheme="secondary"
      shadow="lg"
      fontSize="20px"
      _hover={{
        bg: theme.secondary.hover.bg,
        color: theme.secondary.hover.color,
        boxShadow: `0 0 10px yellow;`,
      }}
      _focus={{
        bg: theme.secondary.hover.bg,
        color: theme.secondary.hover.color,
        boxShadow: `0 0 10px yellow;`,
      }}
      {...buttonProps}
    >
      {children}
    </IconButton>
  );
});
