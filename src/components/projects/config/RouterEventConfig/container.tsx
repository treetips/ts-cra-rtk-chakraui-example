import React, { memo, VFC } from "react";
import { RouterEventConfig, useRouterEventConfig } from ".";

/**
 * Container Component
 * @author treetips
 */
export const RouterEventConfigContainer: VFC = memo(() => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useRouterEventConfig();

  return <RouterEventConfig />;
});
