import { VFC } from "react";
import { Sidenavi } from ".";
import { useSidenavi } from "./hooks";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const SidenaviContainer: VFC<Props> = () => {
  const { theme, isLoggedIn, pages } = useSidenavi();

  return <Sidenavi theme={theme} isLoggedIn={isLoggedIn} pages={pages} />;
};
