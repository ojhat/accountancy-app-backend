import { Stack, Typography, Box } from "@mui/material";
import { RoundedButton } from "../../theme/styledComponents";
import VerificationImage from "../../assets/verification.jpg";
import API from "../../api/auth.api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setIsOpen } from "../Dialog/dialogSlice";
import { selectUser } from "../User/userSlice";
function AccountVerification() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => selectUser(state));
  if (!user._id) return <div>User not logged in or signed up</div>;
  return (
    <Stack direction="row">
      <Box sx={{ display: "flex" }}>
        <img
          src={VerificationImage}
          alt="verification"
          style={{ width: "100%", objectFit: "contain" }}
        />
      </Box>
      <Stack minWidth="300px" justifyContent="center" alignItems="center">
        <Typography variant="h5" textAlign="center">
          Account Created Successfully 😀.
        </Typography>
        <Typography variant="h6" textAlign="center">
          Make Sure To Check Your Spam Folder
        </Typography>
        <RoundedButton
          onClick={() => {
            dispatch(setIsOpen(false));
            API.sendVerificationEmail(user._id);
          }}
        >
          Send Verification Email
        </RoundedButton>
      </Stack>
    </Stack>
  );
}

export default AccountVerification;
