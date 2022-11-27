import React from "react";

import { Slide, DialogContent, Dialog } from "@mui/material";
//Redux
import { useAppSelector, useAppDispatch } from "../../app/hooks";
//Items that can be displayed inside dialog
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";
import AccountVerification from "../AccountVerification/AccountVerification";

import {
  selectIsOpen,
  setIsOpen,
  selectShoudlShowLoginForm,
  selectShouldShowAccountVerificaton,
  selectShouldShowSignUpForm,
} from "./dialogSlice";

import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Form() {
  const isOpen = useAppSelector((state) => selectIsOpen(state));
  const shouldShowSignUpForm = useAppSelector((state) =>
    selectShouldShowSignUpForm(state)
  );
  const shoudlShowLoginForm = useAppSelector((state) =>
    selectShoudlShowLoginForm(state)
  );
  const shouldShowAccountVerificaton = useAppSelector((state) =>
    selectShouldShowAccountVerificaton(state)
  );

  const dispatch = useAppDispatch();

  const renderDialogContent = () => {
    if (shoudlShowLoginForm) return <LoginForm />;
    if (shouldShowSignUpForm) return <SignUpForm />;
    if (shouldShowAccountVerificaton) return <AccountVerification />;
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={(event, reason) => {
        if (reason && reason === "backdropClick") dispatch(setIsOpen(false));
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>{renderDialogContent()}</DialogContent>
    </Dialog>
  );
}
