import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "../components/Dialog/dialogSlice";
import userReducer from "../components/User/userSlice";
import snackBarReducer from "../components/SnackBar/snackBarSlice";
const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    user: userReducer,
    snackbar: snackBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
