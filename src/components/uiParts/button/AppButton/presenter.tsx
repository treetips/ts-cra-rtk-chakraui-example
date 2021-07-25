import { Button, ButtonProps } from "@chakra-ui/button";
import { FC, memo } from "react";
import { AppThemeType } from "../../../../hooks";

type Props = {
  theme: AppThemeType;
} & ButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const AppButton: FC<Props> = memo((props) => {
  const { children, theme, ...buttonProps } = props;

  return (
    <Button
      variant={"solid"}
      colorScheme={"secondary"}
      shadow="lg"
      aria-label={buttonProps["aria-label"] || String(children)}
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
    </Button>
  );
});
