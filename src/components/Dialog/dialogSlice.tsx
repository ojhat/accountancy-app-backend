import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { ReactElement } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
export interface SearchState {
  isOpen: boolean;
  shouldShowSignUpForm: boolean;
  shoudlShowLoginForm: boolean;
  shouldShowAccountVerificaton: boolean;
}

const initialState: SearchState = {
  isOpen: false,
  shoudlShowLoginForm: false,
  shouldShowSignUpForm: false,
  shouldShowAccountVerificaton: false,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },

    openSignUpForm: (state) => {
      Object.assign(state, initialState);
      state.shouldShowSignUpForm = true;
      state.isOpen = true;
    },
    openLoginForm: (state) => {
      Object.assign(state, initialState);
      state.shoudlShowLoginForm = true;
      state.isOpen = true;
    },
    openAccountVerification: (state) => {
      Object.assign(state, initialState);
      state.shouldShowAccountVerificaton = true;
      state.isOpen = true;
    },
  },
});

export const {
  setIsOpen,

  openSignUpForm,
  openLoginForm,
  openAccountVerification,
} = dialogSlice.actions;

export const selectIsOpen = (state: RootState) => state.dialog.isOpen;
export const selectShouldShowSignUpForm = (state: RootState) =>
  state.dialog.shouldShowSignUpForm;
export const selectShoudlShowLoginForm = (state: RootState) =>
  state.dialog.shoudlShowLoginForm;
export const selectShouldShowAccountVerificaton = (state: RootState) =>
  state.dialog.shouldShowAccountVerificaton;

export default dialogSlice.reducer;
