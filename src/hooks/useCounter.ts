import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterSelector,
  decrementAction,
  divideAction,
  incrementAction,
  multiplyAction,
} from "../store/counter";

/**
 * Hooks for counter
 * @author treetips
 */
export const useCounter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector(counterSelector);

  /**
   * + 1
   */
  const increment = useCallback(() => {
    dispatch(incrementAction());
  }, [dispatch]);

  /**
   * - 1
   */
  const decrement = useCallback(() => {
    dispatch(decrementAction());
  }, [dispatch]);

  /**
   * * n
   */
  const multiply = useCallback(
    (inputNumber: number) => {
      dispatch(multiplyAction({ inputNumber }));
    },
    [dispatch]
  );

  /**
   * / n
   */
  const divide = useCallback(
    (inputNumber: number) => {
      dispatch(divideAction({ inputNumber }));
    },
    [dispatch]
  );

  return {
    count: counterState.count,
    increment,
    decrement,
    multiply,
    divide,
  } as const;
};
