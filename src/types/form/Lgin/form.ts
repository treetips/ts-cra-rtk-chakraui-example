/**
 * Login form type
 * @author treetips
 */
export type LoginFormType = {
  username?: string;
  password?: string;
};

/**
 * Login validation error messages type
 * @author treetips
 */
export type LoginFormValidationMessage = LoginFormType;

/**
 * InitialState of login form type
 * @author treetips
 */
export const loginFormInitialValue: LoginFormType = {
  username: undefined,
  password: undefined,
};
