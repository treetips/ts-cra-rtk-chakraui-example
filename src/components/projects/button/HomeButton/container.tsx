import { memo, VFC } from "react";
import { HomeButton, useHomeButton } from ".";

type Props = {
  label?: string;
};

/**
 * Container Component
 * @author treetips
 */
export const HomeButtonContainer: VFC<Props> = memo(({ label: labelProps }) => {
  const { label, isLoading, handleHome } = useHomeButton();

  return (
    <HomeButton
      label={labelProps || label}
      isLoading={isLoading}
      onClick={handleHome}
    />
  );
});
