import { ChangeEvent, useMemo, useState } from "react";

/**
 * Hooks for integer value
 * @author treetips
 * @param initialState initial state
 * @param min minimum value
 * @returns state and state change functions
 */
export const useInputInteger = ({
  initialState = 0,
  min = 0,
}: {
  initialState?: number;
  min?: number;
}): [string, typeof handlers] => {
  const [numberState, setNumberState] = useState(initialState.toString());

  const handlers = useMemo(
    () => ({
      handleInputInteger: (e: ChangeEvent<HTMLInputElement>) => {
        const stringValue = e.target.value.replace(/[^0-9]/g, "");
        if (stringValue) {
          const numberValue = Number(stringValue);
          setNumberState(min <= numberValue ? String(numberValue) : "");
        } else {
          setNumberState("");
        }
      },
      resetInputInteger: () => {
        setNumberState(String(initialState));
      },
    }),
    [initialState, min]
  );

  return [numberState.toString(), handlers];
};
