import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { ColorModeContext } from "./shared/color-mode-context";
import createMyTheme from "./theme";
import { MyRouter } from "./MyRouter";
import { useAppDispatch, useAppSelector } from "./hooks/store.hooks";
import { getSelf } from "./store/features/user.actions";
import { setToken } from "./store/features/user.slice";
import { selectToken, selectUser } from "./store/features/user.slice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );
  const colorMode = React.useMemo(
    () => ({
      onThemeToggle: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(() => createMyTheme(mode), [mode]);

  useEffect(() => {
    if (!token) {
      dispatch(setToken(localStorage.getItem("token") || ""));
    }
    if (token && !user.id) {
      dispatch(getSelf(token));
    }
  }, [token, user.id, dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ "a:hover": { color: "currentcolor" } }} />
        <CssBaseline />
        <MyRouter>
          <Navbar />
          <footer style={{ textAlign: "center" }}>
            <p>
              Made with{" "}
              <span role="img" aria-label="React">
                ⚛️
              </span>{" "}
              by{" "}
              <a href="" target="_blank" rel="noopener noreferrer">
                FutureSolve
              </a>
            </p>
          </footer>
        </MyRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
