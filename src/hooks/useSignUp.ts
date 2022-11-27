import { useState } from "react";
import API from "../api/auth.api";
//Redux
import { useAppDispatch } from "../app/hooks";
import { openAccountVerification } from "../components/Dialog/dialogSlice";
import { setUser } from "../components/User/userSlice";
export interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

export default function useSignUp() {
  const dispatch = useAppDispatch();

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const isPasswordError =
    values.confirmPassword !== "" && values.password !== values.confirmPassword;
  const isEmailError =
    values.email !== "" &&
    !new RegExp("^[a-z0-9]{4}-[a-z]{3}-[0-9]{3}$", "i").test(values.email) &&
    values.email.length !== 12;

  const handleFormSubmit = async () => {
    if (
      values.email &&
      values.name &&
      values.password &&
      values.confirmPassword
    ) {
      const result = await API.signUp(
        values.name,
        values.email + "@cuilahore.edu.pk",
        values.password
      );
      localStorage.setItem("token", result.token);
      dispatch(setUser(result.user));
      dispatch(openAccountVerification());
    } else {
      setSubmitErrorMessage("Please fill all fields");
    }
  };

  return {
    values,
    setValues,
    handleFormSubmit,
    isPasswordError,
    isEmailError,
    submitErrorMessage,
  };
}
