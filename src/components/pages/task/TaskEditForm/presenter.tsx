import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Switch,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Field, Form } from "react-final-form";
import { TaskEditFormType } from "../../../../types/form/TaskEdit";
import { AppButtonContainer } from "../../../uiParts/button/AppButton";

type Props = {
  formInitialValue: TaskEditFormType;
  isLoading: boolean;
  labels: {
    task: {
      title: string;
      description: string;
      status: string;
    };
    button: {
      reset: string;
      submit: string;
    };
  };
  onValidateForm: {
    title: (errorMessage: string) => string | undefined;
    description: (errorMessage: string) => string | undefined;
    status: (errorMessage: string) => string | undefined;
  };
  onSubmit: (form: Required<TaskEditFormType>) => void;
};

/**
 * Presentational Component
 * @author treetips
 */
export const TaskEditForm: VFC<Props> = memo(
  ({ formInitialValue, onValidateForm, onSubmit, isLoading, labels }) => {
    return (
      <VStack divider={<Divider />}>
        <Box p={5} borderWidth="1px" shadow="xl" w="100%">
          <Form
            onSubmit={onSubmit}
            initialValues={formInitialValue}
            render={({ form, handleSubmit, submitting, pristine, valid }) => (
              <form onSubmit={handleSubmit}>
                <Box>
                  <Field name="title" validate={onValidateForm.title}>
                    {({ input, meta }) => (
                      <FormControl
                        isRequired
                        isInvalid={meta.error && !meta.pristine}
                      >
                        <FormLabel>{labels.task.title}</FormLabel>
                        <Box>
                          <Input
                            placeholder={labels.task.title}
                            isInvalid={meta.error && !meta.pristine}
                            {...input}
                          />
                          {meta.error && meta.touched && (
                            <FormHelperText color="red.500">
                              {meta.error}
                            </FormHelperText>
                          )}
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                </Box>

                <Box>
                  <Field
                    name="description"
                    validate={onValidateForm.description}
                  >
                    {({ input, meta }) => (
                      <FormControl
                        id="description"
                        isRequired
                        isInvalid={meta.error && !meta.pristine}
                      >
                        <FormLabel>{labels.task.description}</FormLabel>
                        <Box>
                          <Textarea
                            placeholder={labels.task.description}
                            isInvalid={meta.error && !meta.pristine}
                            {...input}
                          />
                          {meta.error && meta.touched && (
                            <FormHelperText color="red.500">
                              {meta.error}
                            </FormHelperText>
                          )}
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                </Box>

                <Box>
                  <Field name="status" validate={onValidateForm.status}>
                    {({ input, meta }) => (
                      <FormControl
                        id="status"
                        isRequired
                        isInvalid={meta.error && !meta.pristine}
                      >
                        <FormLabel>{labels.task.status}</FormLabel>
                        <Box>
                          <Switch
                            size="lg"
                            {...input}
                            isChecked={Boolean(input.value)}
                          />
                          {meta.error && meta.touched && (
                            <FormHelperText color="red.500">
                              {meta.error}
                            </FormHelperText>
                          )}
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                </Box>

                <Flex justifyContent="space-between">
                  <AppButtonContainer
                    variant="outline"
                    mt={4}
                    disabled={submitting || pristine}
                    isLoading={isLoading}
                    onClick={() => form.reset()}
                  >
                    {labels.button.reset}
                  </AppButtonContainer>
                  <AppButtonContainer
                    type="submit"
                    mt={4}
                    disabled={!valid || submitting || pristine}
                    isLoading={isLoading}
                  >
                    {labels.button.submit}
                  </AppButtonContainer>
                </Flex>
              </form>
            )}
          />
        </Box>
      </VStack>
    );
  }
);
