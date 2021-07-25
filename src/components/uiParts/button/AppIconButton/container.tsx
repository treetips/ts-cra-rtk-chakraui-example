import { ComponentProps, FC, memo } from "react";
import { AppIconButton, useAppIconButton } from ".";

type Props = Omit<ComponentProps<typeof AppIconButton>, "theme">;

/**
 * Container Component
 * @author treetips
 */
export const AppIconButtonContainer: FC<Props> = memo((props) => {
  const { theme } = useAppIconButton();
  return (
    <AppIconButton theme={theme} {...props}>
      {props.children}
    </AppIconButton>
  );
});
