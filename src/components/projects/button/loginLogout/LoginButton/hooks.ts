import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { LoginValidation } from "../../../../../constants/form/Login";
import { useLogin, useTranslate } from "../../../../../hooks";
import { useFormValidation } from "../../../../../hooks/useFormValidation";
import { LoginFormType } from "../../../../../types/form/Lgin";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useLoginButton = () => {
  const { translate } = useTranslate();
  const { validateRquired, validateMaxlength, composeValidators } =
    useFormValidation();
  const { login } = useLogin();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [validationMessage, setValidationMessage] = useState<string>();

  /**
   * Open modal handler
   */
  const handleOpenModal = () => onOpen();

  /**
   * CLose modal handler
   */
  const handleCloseModal = () => onClose();

  /**
   * Login handler
   * @param form Login form
   */
  const handleLogin = (form: Required<LoginFormType>): void => {
    const { username, password } = form;
    if (username !== "guest" || password !== "guest") {
      setValidationMessage(translate("error.login.failure"));
      return;
    }
    login();
    setValidationMessage(undefined);
  };

  return {
    handleValidateForm: {
      username: composeValidators(
        validateRquired(
          translate("validation.required", {
            name: translate("label.login.username"),
          })
        ),
        validateMaxlength(
          LoginValidation.username.max,
          translate("validation.max", {
            name: translate("label.login.username"),
            number: LoginValidation.username.max,
          })
        )
      ),
      password: composeValidators(
        validateRquired(
          translate("validation.required", {
            name: translate("label.login.password"),
          })
        ),
        validateMaxlength(
          LoginValidation.password.max,
          translate("validation.max", {
            name: translate("label.login.password"),
            number: LoginValidation.password.max,
          })
        )
      ),
    },
    handleOpenModal,
    handleCloseModal,
    handleLogin,
    isOpen,
    validationMessage,
    labels: {
      button: {
        label: translate("label.login"),
      },
      modal: {
        input: {
          username: translate("label.login.username"),
          password: translate("label.login.password"),
        },
        button: {
          login: translate("label.login"),
        },
      },
    },
  } as const;
};
