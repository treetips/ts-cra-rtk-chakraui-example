import { Box, VStack } from "@chakra-ui/layout";
import {
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { TaskEntity } from "../../../../types/entity/TaskEntity";
import { TaskEditButtonContainer } from "../../../projects/button/task/TaskEditButton";
import { TaskImageEditButtonContainer } from "../../../projects/button/task/TaskImageEditButton";
import { TaskRemoveButtonContainer } from "../../../projects/button/task/TaskRemoveButton";
import { SectioneaderContainer } from "../../../projects/hero/Sectioneader";
import { DateTimeContainer } from "../../../projects/i18n/DateTime";
import { NoImageContainer } from "../../../projects/image/NoImage";
import { TaskImageContainer } from "../../../projects/image/TaskImage";

type Props = {
  taskEntity: TaskEntity;
  labels: {
    section: {
      image: string;
      basicInfo: string;
    };
    id: string;
    title: string;
    description: string;
    status: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const TaskDetailEntrypoint: VFC<Props> = memo(
  ({ taskEntity, labels }) => {
    return (
      <VStack spacing={5} align="stretch" w="100%">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
        >
          <Box p={5} borderWidth="1px" shadow="xl">
            <SectioneaderContainer
              title={labels.section.image}
              actions={
                <ButtonGroup>
                  <TaskImageEditButtonContainer id={taskEntity.id} />
                </ButtonGroup>
              }
            />

            {taskEntity.imageDataUri ? (
              <TaskImageContainer
                imageDataUri={taskEntity.imageDataUri}
                alt={taskEntity.title}
              />
            ) : (
              <NoImageContainer size={{ width: "100%" }} />
            )}
          </Box>

          <Box p={5} borderWidth="1px" shadow="xl">
            <SectioneaderContainer
              title={labels.section.basicInfo}
              actions={
                <ButtonGroup>
                  <TaskEditButtonContainer id={taskEntity.id} />
                  <TaskRemoveButtonContainer id={taskEntity.id} />
                </ButtonGroup>
              }
            />

            <FormControl>
              <FormLabel>{labels.id}</FormLabel>
              <Text as="p">{taskEntity.id}</Text>
            </FormControl>

            <Divider mt={3} mb={3} />

            <FormControl>
              <FormLabel>{labels.title}</FormLabel>
              <Text as="p">{taskEntity.title}</Text>
            </FormControl>

            <Divider mt={3} mb={3} />

            <FormControl>
              <FormLabel>{labels.description}</FormLabel>
              <Textarea
                resize="none"
                isReadOnly
                value={taskEntity.description}
              />
            </FormControl>

            <Divider mt={3} mb={3} />

            <FormControl>
              <FormLabel>{labels.status}</FormLabel>
              <Switch size="lg" isChecked={taskEntity.status} isReadOnly />
            </FormControl>

            <Divider mt={3} mb={3} />

            <FormControl>
              <FormLabel>{labels.createdAt}</FormLabel>
              <Text as="p">
                <DateTimeContainer value={taskEntity.createdAt} />
              </Text>
            </FormControl>

            <Divider mt={3} mb={3} />

            <FormControl>
              <FormLabel>{labels.updatedAt}</FormLabel>
              <Text as="p">
                <DateTimeContainer value={taskEntity.updatedAt} />
              </Text>
            </FormControl>
          </Box>
        </Grid>
      </VStack>
    );
  }
);
