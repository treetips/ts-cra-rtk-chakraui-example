/**
 * Hooks for react-final-form validation
 * @author treetips
 */
export const useFormValidation = () => {
  /**
   * Required
   * @param errorMessage error message
   * @returns error message
   */
  const validateRquired =
    (errorMessage: string) =>
    (inputValue?: string): string | undefined => {
      if (inputValue) {
        return undefined;
      }
      return errorMessage;
    };

  /**
   * Maxlength
   * @param maxlengthValue maxlength value
   * @param errorMessage error message
   * @returns error message
   */
  const validateMaxlength =
    (maxlengthValue: number, errorMessage: string) =>
    (inputValue: string): string | undefined => {
      if (inputValue.length <= maxlengthValue) {
        return undefined;
      }
      return errorMessage;
    };

  /**
   * Integer
   * @param errorMessage error message
   * @returns error message
   */
  const validateInteger =
    (errorMessage: string) =>
    (inputValue: string): string | undefined => {
      if (inputValue.match(/^([1-9]|0)+[0-9]*$/i)) {
        return undefined;
      }
      return errorMessage;
    };

  /**
   * Range
   * @param min minimum value
   * @param max maximum value
   * @param errorMessage error message
   * @returns error message
   */
  const validateRange =
    (min: number, max: number, errorMessage: string) =>
    (inputValue: string): string | undefined => {
      // 範囲チェック
      const inputNumberValue = Number(inputValue);
      if (min <= inputNumberValue && inputNumberValue <= max) {
        return undefined;
      }
      return errorMessage;
    };

  /**
   * Boolean
   * @param errorMessage error message
   * @returns error message
   */
  const validateBoolean =
    (errorMessage: string) =>
    (inputValue: boolean): string | undefined => {
      if ([true, false].includes(inputValue)) {
        return undefined;
      }
      return errorMessage;
    };

  /**
   * Compose
   * @param validators validators
   * @returns validator
   */
  const composeValidators =
    (...validators: Function[]) =>
    (value: string): string | undefined => {
      for (let validator of validators) {
        const errorMessage = validator(value);
        if (errorMessage) {
          return errorMessage;
        }
      }
      return undefined;
    };

  return {
    validateRquired,
    validateMaxlength,
    validateInteger,
    validateBoolean,
    validateRange,
    composeValidators,
  } as const;
};
