import { VStack } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { TaskEntity } from "../../../../types/entity/TaskEntity";
import { TaskEditFormContainer } from "../../../pages/task/TaskEditForm";

type Props = {
  taskEntity: TaskEntity;
};

/**
 * Presentational Component
 * @author treetips
 */
export const TaskEditEntrypoint: VFC<Props> = memo(({ taskEntity }) => {
  return (
    <VStack spacing={5} align="stretch">
      <TaskEditFormContainer taskEntity={taskEntity} />
    </VStack>
  );
});
