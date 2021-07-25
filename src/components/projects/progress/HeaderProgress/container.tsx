import { ComponentProps, memo, VFC } from "react";
import { HeaderProgress, useHeaderProgress } from ".";

type Props = Partial<Pick<ComponentProps<typeof HeaderProgress>, "isLoading">>;

/**
 * Container Component
 * @author treetips
 */
export const HeaderProgressContainer: VFC<Props> = memo(({ isLoading }) => {
  const { theme, isLoading: isStoreLoading } = useHeaderProgress();

  return (
    <HeaderProgress theme={theme} isLoading={isLoading || isStoreLoading} />
  );
});
