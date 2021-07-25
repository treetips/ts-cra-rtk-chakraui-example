import { VStack } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { TaskRegistrationFormContainer } from "../../../pages/task/TaskRegistrationForm";

type Props = {};

/**
 * Presentational Component
 * @author treetips
 */
export const TaskRegistrationEntrypoint: VFC<Props> = memo(() => (
  <VStack spacing={5} align="stretch">
    <TaskRegistrationFormContainer />
  </VStack>
));
