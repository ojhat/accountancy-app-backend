import { useState } from "react";
import API from "../api/auth.api";
//Redux
import { useAppDispatch } from "../app/hooks";
import { setIsOpen } from "../components/Dialog/dialogSlice";
import { setUser } from "../components/User/userSlice";

export interface Values {
  email: string;
  password: string;
  showPassword: boolean;
}
export default function useSignUp() {
  const dispatch = useAppDispatch();

  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    showPassword: false,
  });
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const isEmailError =
    values.email !== "" &&
    !new RegExp("^[a-z0-9]{4}-[a-z]{3}-[0-9]{3}$", "i").test(values.email) &&
    values.email.length !== 12;
  const handleChange =
    (prop: keyof Values) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleFormSubmit = async () => {
    if (values.email && values.password) {
      try {
        const result = await API.logIn(
          values.email + "@cuilahore.edu.pk",
          values.password
        );
        localStorage.setItem("token", result.token);
        dispatch(setUser(result.user));
        dispatch(setIsOpen(false));
      } catch (err) {
        setSubmitErrorMessage("email or password is wrong");
      }
    } else {
      setSubmitErrorMessage("Please fill all fields");
    }
  };

  return {
    values,
    handleChange,
    handleFormSubmit,
    handleClickShowPassword,
    isEmailError,
    submitErrorMessage,
  };
}
