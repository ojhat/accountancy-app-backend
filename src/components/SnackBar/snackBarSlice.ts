import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface SnackBarState {
  isSnackBarOpen: boolean;
  snackBarMessage: string;
}

const initialState: SnackBarState = {
  isSnackBarOpen: false,
  snackBarMessage: "",
};

export const snackBarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackMessage: (state, action: PayloadAction<string>) => {
      state.isSnackBarOpen = true;
      state.snackBarMessage = action.payload;
    },
    setIsSnackBarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSnackBarOpen = action.payload;
    },
  },
});

export const { showSnackMessage, setIsSnackBarOpen } = snackBarSlice.actions;

export const selectIsSnackBarOpen = (state: RootState) =>
  state.snackbar.isSnackBarOpen;
export const selectSnackBarMessage = (state: RootState) =>
  state.snackbar.snackBarMessage;

export default snackBarSlice.reducer;
