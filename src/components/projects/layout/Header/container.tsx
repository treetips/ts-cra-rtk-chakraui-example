import { memo } from "react";
import { Header } from ".";
import { useHeader } from "./hooks";

/**
 * Container Component
 * @author treetips
 */
export const HeaderContainer = memo(() => {
  const { theme, drawer, appbar, labels } = useHeader();

  return (
    <Header theme={theme} appbar={appbar} drawer={drawer} labels={labels} />
  );
});
