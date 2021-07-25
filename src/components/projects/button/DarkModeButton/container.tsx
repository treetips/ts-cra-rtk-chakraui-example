import { memo, VFC } from "react";
import { DarkModeButton, useDarkModeButton } from ".";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const DarkModeButtonContainer: VFC<Props> = memo(() => {
  const { colorMode, handleMode } = useDarkModeButton();

  return <DarkModeButton colorMode={colorMode} onClick={handleMode} />;
});
