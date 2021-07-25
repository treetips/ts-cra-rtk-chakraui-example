import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { FeatureKey } from "../featureKey";

/**
 * Payload
 */
export type CounterPayload = {
  inputNumber: number;
};

/**
 * State
 */
export type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 1,
};

/**
 * Slice
 * @see https://redux-toolkit.js.org/api/createslice
 */
const slice = createSlice({
  name: FeatureKey.counter,
  initialState,
  reducers: {
    incrementAction: (state: CounterState): void => {
      state.count = state.count + 1;
    },
    decrementAction: (state: CounterState): void => {
      state.count = state.count - 1;
    },
    multiplyAction: (
      state: CounterState,
      action: PayloadAction<CounterPayload>
    ): void => {
      const { payload } = action;
      state.count = state.count * payload.inputNumber;
    },
    divideAction: (
      state: CounterState,
      action: PayloadAction<CounterPayload>
    ): void => {
      const { payload } = action;
      state.count = state.count / payload.inputNumber;
    },
    resetAction: (state: CounterState): void => {
      state.count = initialState.count;
    },
  },
});

/**
 * Reducer
 */
export const counterReducer = slice.reducer;

/**
 * Action
 */
export const {
  incrementAction,
  decrementAction,
  multiplyAction,
  divideAction,
} = slice.actions;

/**
 * Selector
 * @param state CounterState
 */
export const counterSelector = (state: RootState) => state.counter;
