import {
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { PaletteMode, darkScrollbar } from "@mui/material";

// A custom theme for this app
const theme = (mode: PaletteMode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: {
          main: "#2b3ce4",
          light: "#2b3ce4",
          dark: "#525CEB",
        },
        secondary: {
          main: "#525ceb",
          light: "#525ceb",
          dark: "#BFCFE7",
          contrastText: "#fff",
        },
        background: {
          default: mode === "light" ? "#ECEBE4" : "#191919",
          paper: mode === "light" ? "#000858" : "#101418",
        },
        error: { main: "#ff1744" },
        text: {
          primary: mode === "light" ? "#191919" : "#F8EDFF",
          secondary: mode === "light" ? "#3D3B40" : "#9e9e9e",
        },
        divider: mode === "light" ? "#6d4c41" : "#BFCFE7",
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: (themeParam) => ({
            body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
          }),
        },
      },
    } as ThemeOptions)
  );
export default theme;
