import { memo, VFC } from "react";
import { LoginButton, useLoginButton } from ".";
import { loginFormInitialValue } from "../../../../../types/form/Lgin";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const LoginButtonContainer: VFC<Props> = memo(() => {
  const {
    handleValidateForm,
    handleOpenModal,
    handleCloseModal,
    handleLogin,
    isOpen,
    validationMessage,
    labels,
  } = useLoginButton();

  return (
    <LoginButton
      formInitialValue={loginFormInitialValue}
      onValidateForm={handleValidateForm}
      onOpen={handleOpenModal}
      onClose={handleCloseModal}
      onLogin={handleLogin}
      isOpen={isOpen}
      validationMessage={validationMessage}
      labels={labels}
    >
      {labels.button.label}
    </LoginButton>
  );
});
