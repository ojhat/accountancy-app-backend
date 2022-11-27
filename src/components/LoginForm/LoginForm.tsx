import LoginImage from "../../assets/login.jpg";
import {
  Button as MUIButton,
  Box,
  Typography,
  IconButton,
  Stack,
  InputAdornment,
  TextField,
  FormControl,
  FormHelperText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  MailRounded,
  LockRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { RoundedButton } from "../../theme/styledComponents";
//Redux
import { useAppDispatch } from "../../app/hooks";
import { openSignUpForm } from "../Dialog/dialogSlice";
//Hooks
import useLogIn from "../../hooks/useLogin";
export default function LoginForm() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const {
    values,
    handleChange,
    handleClickShowPassword,
    handleFormSubmit,
    isEmailError,
    submitErrorMessage,
  } = useLogIn();

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Stack direction="row">
        <Box flex={isSmallScreen ? 0 : 0.5} sx={{ display: "flex" }}>
          <img
            src={LoginImage}
            alt="login"
            width="100%"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > :not(style)": { m: 1 },
          }}
          flex={isSmallScreen ? 1 : 0.5}
        >
          <Typography className="blueHeading" variant="h5">
            Login To Account
          </Typography>
          <FormControl>
            <Stack spacing={3}>
              <FormControl>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  error={isEmailError}
                  placeholder="fa20-bcs-000"
                  onChange={handleChange("email")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailRounded />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography>@cuilahore.edu.pk</Typography>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                <FormHelperText>
                  {isEmailError && "Enter reg no as fa20-bcs-000"}
                </FormHelperText>
              </FormControl>

              <TextField
                id="password"
                label="Password"
                placeholder="password"
                value={values.password}
                onChange={handleChange("password")}
                type={values.showPassword ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <RoundedButton onClick={handleFormSubmit}>Log In</RoundedButton>
            </Stack>
            <FormHelperText error>{submitErrorMessage}</FormHelperText>
          </FormControl>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Typography>Don't have an account?</Typography>
        <MUIButton
          style={{ padding: "0" }}
          onClick={() => dispatch(openSignUpForm())}
        >
          Sign Up
        </MUIButton>
      </Stack>
    </Box>
  );
}
