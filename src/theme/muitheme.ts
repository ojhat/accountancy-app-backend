import { createTheme } from "@mui/material/styles";
import { orange, lightBlue, grey } from "@mui/material/colors";
import { Color } from "@mui/material";
declare module "@mui/material/styles" {
  interface Theme extends ThemeOptions {}
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status: {
      danger: string;
    };
  }

  interface PaletteOptions {
    myColors: {
      [key: string]: Partial<Color>;
    };
    tertiary: PaletteOptions["primary"];
  }
  interface Palette extends PaletteOptions {
    tertiary: Palette["primary"];
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: grey,
    tertiary: lightBlue,
    background: { default: "#202124" },
    myColors: {
      lightGreen: {
        "50": "#e8f8eb",
        "100": "#c8edcf",
        "200": "#a5e2b0",
        "300": "#7ed790",
        "400": "#5fcd77",
        "500": "#3fc35e",
        "600": "#35b354",
        "700": "#29a148",
      },
    },
  },
  //custom variables in theme
  status: {
    danger: orange[500],
  },
});

theme.typography.h4 = {
  fontSize: "1.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};
export default theme;
