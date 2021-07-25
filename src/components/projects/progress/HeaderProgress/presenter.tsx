import { Progress } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { AppThemeType } from "../../../../hooks";

type Props = {
  theme: AppThemeType;
  isLoading: boolean;
};

/**
 * Presentational Component
 * @author treetips
 */
export const HeaderProgress: VFC<Props> = memo(({ theme, isLoading }) => {
  return (
    <>
      {isLoading && (
        <Progress
          colorScheme="secondary"
          borderWidth={1}
          borderColor={theme.secondary.borderColor}
          size="xs"
          pos="fixed"
          top={0}
          w="100vw"
          zIndex={99999999}
          isIndeterminate
        />
      )}
    </>
  );
});
