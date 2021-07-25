import { ComponentProps, FC, memo } from "react";
import { AppButton, useAppButton } from ".";

type Props = Omit<ComponentProps<typeof AppButton>, "theme">;

/**
 * Container Component
 * @author treetips
 */
export const AppButtonContainer: FC<Props> = memo((props) => {
  const { theme } = useAppButton();
  return (
    <AppButton theme={theme} {...props}>
      {props.children}
    </AppButton>
  );
});
