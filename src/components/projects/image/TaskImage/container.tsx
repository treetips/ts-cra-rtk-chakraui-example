import { ComponentProps, memo, VFC } from "react";
import { TaskImage } from ".";

type Props = ComponentProps<typeof TaskImage>;

/**
 * Container Component
 * @author treetips
 */
export const TaskImageContainer: VFC<Props> = memo(({ imageDataUri, size }) => {
  return <TaskImage imageDataUri={imageDataUri} size={size} />;
});
