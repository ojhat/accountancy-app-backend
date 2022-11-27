import { useState } from "react";
//Redux
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../User/userSlice";
import API from "../../api/employees.api";
import { useAppDispatch } from "../../app//hooks";
import { showSnackMessage } from "../SnackBar/snackBarSlice";

function useGiveRating(employeeId: string) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => selectUser(state));
  const [ratingValue, setRatingValue] = useState<number | null>(3);
  const [ratingDetails, setRatingDetails] = useState("");
  const shouldDisableButton = !user || !user.isEmailVerified;
  const submitRatingHandler = async () => {
    if (ratingValue && !shouldDisableButton) {
      const result = await API.addRating(
        employeeId,
        ratingValue,
        ratingDetails
      );
      dispatch(showSnackMessage(result.message));
    }
  };

  return {
    ratingValue,
    setRatingValue,
    submitRatingHandler,
    shouldDisableButton,
    ratingDetails,
    setRatingDetails,
  };
}

export default useGiveRating;
