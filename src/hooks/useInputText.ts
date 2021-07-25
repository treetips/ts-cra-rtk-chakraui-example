import { ChangeEvent, useMemo, useState } from "react";

/**
 * Hooks for <input type="text">
 * @author treetips
 * @param initialState initial state
 * @returns state and state change functions
 */
export const useInputText = ({
  initialState = "",
}: {
  initialState?: string;
}): [string, typeof handlers] => {
  const [state, setState] = useState(initialState);

  const handlers = useMemo(
    () => ({
      setInputText: (value?: string) => {
        value && setState(value);
      },
      handleInputText: (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
      },
      resetInputText: () => {
        setState(initialState);
      },
      clearInputText: () => {
        setState("");
      },
    }),
    [initialState]
  );

  return [state, handlers];
};
