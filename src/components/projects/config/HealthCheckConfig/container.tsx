import React, { memo, VFC } from "react";
import { HealthCheckConfig, useHealthCheckConfig } from ".";

/**
 * Container Component
 * @author treetips
 */
export const HealthCheckConfigContainer: VFC = memo(() => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useHealthCheckConfig();

  return <HealthCheckConfig />;
});
