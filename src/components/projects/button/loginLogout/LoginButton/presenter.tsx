import { ButtonProps } from "@chakra-ui/button";
import {
  Alert,
  AlertIcon,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { Field, Form } from "react-final-form";
import { IoLogIn } from "react-icons/io5";
import { LoginFormType } from "../../../../../types/form/Lgin";
import { AppButtonContainer } from "../../../../uiParts/button/AppButton";

type Props = {
  formInitialValue: LoginFormType;
  onValidateForm: {
    username: (errorMessage: string) => string | undefined;
    password: (errorMessage: string) => string | undefined;
  };
  onOpen: () => void;
  onClose: () => void;
  onLogin: (form: Required<LoginFormType>) => void;
  isOpen: boolean;
  validationMessage?: string;
  labels: {
    button: {
      label: string;
    };
    modal: {
      input: {
        username: string;
        password: string;
      };
      button: {
        login: string;
      };
    };
  };
} & ButtonProps;

/**
 * Presentational Component
 * @author treetips
 */
export const LoginButton: FC<Props> = memo(
  ({
    children,
    formInitialValue,
    onValidateForm,
    onOpen,
    onClose,
    onLogin,
    isOpen,
    validationMessage,
    labels,
  }) => (
    <Box>
      <AppButtonContainer leftIcon={<IoLogIn size={25} />} onClick={onOpen}>
        {children}
      </AppButtonContainer>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent shadow="dark-lg">
          <Form
            onSubmit={onLogin}
            initialValues={formInitialValue}
            render={({ handleSubmit, submitting, pristine, valid }) => (
              <form onSubmit={handleSubmit}>
                <ModalCloseButton />
                <ModalBody>
                  {validationMessage && (
                    <Alert status="warning" mb={5}>
                      <AlertIcon />
                      <Text as="p">{validationMessage}</Text>
                    </Alert>
                  )}
                  <Field name="username" validate={onValidateForm.username}>
                    {({ input, meta }) => (
                      <FormControl
                        isRequired
                        isInvalid={meta.error && !meta.pristine}
                      >
                        <FormLabel>{labels.modal.input.username}</FormLabel>
                        <Box>
                          <Input
                            placeholder={labels.modal.input.username}
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

                  <Field name="password" validate={onValidateForm.password}>
                    {({ input, meta }) => (
                      <FormControl
                        mt={4}
                        isRequired
                        isInvalid={meta.error && !meta.pristine}
                      >
                        <FormLabel>{labels.modal.input.password}</FormLabel>
                        <Box>
                          <Input
                            type="password"
                            placeholder={labels.modal.input.password}
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
                </ModalBody>

                <ModalFooter>
                  <VStack w="100%">
                    <Text as="p">{labels.modal.input.username} = guest</Text>
                    <Text as="p">{labels.modal.input.password} = guest</Text>
                    <AppButtonContainer
                      type="submit"
                      leftIcon={<IoLogIn size={25} />}
                      w="100%"
                      disabled={!valid || submitting || pristine}
                    >
                      {labels.modal.button.login}
                    </AppButtonContainer>
                  </VStack>
                </ModalFooter>
              </form>
            )}
          />
        </ModalContent>
      </Modal>
    </Box>
  )
);
