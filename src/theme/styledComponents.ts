import {
  TextField,
  Stack,
  styled,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

export const BorderLessTextInput = styled(TextField)`
  border-radius: 50px;
  background-color: ${(props) => props.theme.palette.grey[500]};
  & .MuiOutlinedInput-input {
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.grey[900]};
  }
  & .MuiOutlinedInput-root {
    & > fieldset {
      border: none;
    }
  }
`;

export const RoundedButton = styled(Button)`
  width: 100%;
  border-radius: 20px;
`;
RoundedButton.defaultProps = {
  variant: "contained",
  color: "secondary",
};

export const ColoredStack = styled(Stack)`
  background-color: ${(props) => props.theme.palette.secondary.dark};
  padding: 10px;
`;

export const Thumb = styled(Box)`
  max-width: 100px;
  min-width: 100px;
  ${(props) => props.theme.breakpoints.up("sm")} {
    max-width: 200px;
  }
  & > * {
    width: 100%;
    border-radius: 10px;
  }
`;

export const HoverEffect = styled(Box)`
  transition: all 1s;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const CenteredSpinner = styled(CircularProgress)`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));
