import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface UserState {
  name: string;
  email: string;
  _id: string;
  isEmailVerified: boolean;
}

const initialState: UserState = {
  name: "",
  email: "",
  _id: "",
  isEmailVerified: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.isEmailVerified = action.payload.isEmailVerified;
    },
    resetUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
