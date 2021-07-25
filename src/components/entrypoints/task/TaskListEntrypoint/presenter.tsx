import { ButtonGroup } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, VStack } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/react";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { memo, VFC } from "react";
import { MdClear, MdDone } from "react-icons/md";
import { AppThemeType } from "../../../../hooks";
import { TaskEntity } from "../../../../types/entity/TaskEntity";
import { TaskSearchFormContainer } from "../../../pages/task/TaskSearchForm";
import { TaskSearchResultContainer } from "../../../pages/task/TaskSearchResult";
import { TaskDetailButtonContainer } from "../../../projects/button/task/TaskDetailButton";
import { TaskEditButtonContainer } from "../../../projects/button/task/TaskEditButton";
import { TaskRegistrationButtonContainer } from "../../../projects/button/task/TaskRegistrationButton";
import { TaskRemoveButtonContainer } from "../../../projects/button/task/TaskRemoveButton";
import { SectioneaderContainer } from "../../../projects/hero/Sectioneader";

type Props = {
  theme: AppThemeType;
  keywordQueryString?: string;
  taskEntities: TaskEntity[];
  labels: {
    task: {
      information: string;
      id: string;
      title: string;
      description: string;
      status: string;
      image: string;
      actions: string;
      register: string;
      search: string;
    };
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const TaskListEntrypoint: VFC<Props> = memo(
  ({ theme, keywordQueryString, taskEntities, labels }) => {
    const searchResultNumber = taskEntities.length || 0;

    const TableRow = () => (
      <Tr>
        <Th borderColor={theme.primary.borderColor} isNumeric>
          {labels.task.id}
        </Th>
        <Th borderColor={theme.primary.borderColor}>{labels.task.title}</Th>
        <Th borderColor={theme.primary.borderColor} isNumeric>
          {labels.task.status}
        </Th>
        <Th borderColor={theme.primary.borderColor}>{labels.task.image}</Th>
        <Th borderColor={theme.primary.borderColor}>{labels.task.actions}</Th>
      </Tr>
    );

    return (
      <VStack spacing={5} align="stretch">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
        >
          <Box>
            <SectioneaderContainer title={labels.task.search} />
            <TaskSearchFormContainer keywordQueryString={keywordQueryString} />
          </Box>
          <Box>
            <SectioneaderContainer title={labels.task.register} />
            <TaskRegistrationButtonContainer />
          </Box>
        </Grid>

        <Box>
          <TaskSearchResultContainer searchResultNumber={searchResultNumber} />
        </Box>

        {searchResultNumber && (
          <Box>
            <Table colorScheme="primary" borderWidth="1px" shadow="xl">
              <TableCaption placement="top">
                {labels.task.information}
              </TableCaption>
              <Thead>
                <TableRow />
              </Thead>
              <Tbody>
                {taskEntities.map((taskEntity: TaskEntity) => (
                  <Tr key={taskEntity.id}>
                    <Td borderColor={theme.primary.borderColor} isNumeric>
                      {taskEntity.id}
                    </Td>
                    <Td borderColor={theme.primary.borderColor}>
                      {taskEntity.title}
                    </Td>
                    <Td borderColor={theme.primary.borderColor} isNumeric>
                      {taskEntity.status ? (
                        <Icon
                          as={MdDone}
                          color={theme.secondary.bg}
                          boxSize={6}
                        />
                      ) : (
                        <Icon as={MdClear} boxSize={6} />
                      )}
                    </Td>
                    <Td borderColor={theme.primary.borderColor}>
                      {taskEntity.imageDataUri ? (
                        <Icon
                          as={ViewIcon}
                          color={theme.secondary.bg}
                          boxSize={6}
                        />
                      ) : (
                        <Icon as={ViewOffIcon} boxSize={6} />
                      )}
                    </Td>
                    <Td borderColor={theme.primary.borderColor}>
                      <ButtonGroup size="sm" isAttached variant="outline">
                        <TaskDetailButtonContainer id={taskEntity.id} />
                        <TaskEditButtonContainer id={taskEntity.id} />
                        <TaskRemoveButtonContainer id={taskEntity.id} />
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <TableRow />
              </Tfoot>
            </Table>
          </Box>
        )}
      </VStack>
    );
  }
);
