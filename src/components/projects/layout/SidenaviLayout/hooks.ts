import { LayoutConstants } from "../../../../constants";
import { useTasks } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useSidenaviLayout = () => {
  const { error } = useTasks();

  return {
    sidenavi: {
      width: LayoutConstants.sidenavi.width,
    },
    apiErrorResponsePayload: error,
  } as const;
};
