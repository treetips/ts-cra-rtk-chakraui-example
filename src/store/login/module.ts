import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { FeatureKey } from "../featureKey";

/**
 * State
 */
export type LoginState = {
  isOpenLoginForm: boolean;
  isLoggedIn: boolean;
};
const initialState: LoginState = {
  isOpenLoginForm: false,
  isLoggedIn: false,
};

const slice = createSlice({
  name: FeatureKey.login,
  initialState,
  reducers: {
    // Login Status
    loginAction: (state: LoginState): void => {
      state.isLoggedIn = true;
    },
    logoutAction: (state: LoginState): void => {
      state.isLoggedIn = false;
    },
    // Login Form
    showLoginFormAction: (state: LoginState): void => {
      state.isOpenLoginForm = true;
    },
    hideLoginFormAction: (state: LoginState): void => {
      state.isOpenLoginForm = false;
    },
  },
});

/**
 * Reducer
 */
export const loginReducer = slice.reducer;

/**
 * Action
 */
export const {
  loginAction,
  logoutAction,
  showLoginFormAction,
  hideLoginFormAction,
} = slice.actions;

/**
 * Selector
 * @param state LoginState
 */
export const loginSelector = (state: RootState) => state.login;
