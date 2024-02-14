import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ElevationScroll } from "./elevation-scroll";
import { Link as RouterLink } from "react-router-dom";
import { ThemeModeSwitch } from "./theme-mode-switch";
import NavButton from "./nav-button";
import { useAppDispatch, useAppSelector } from "../hooks/store.hooks";
import { selectToken } from "../store/features/user.slice";
import { signOut } from "../store/features/user.actions";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);

  const onSignOutHandeler = () => {
    dispatch(signOut());
  };

  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        color="secondary"
        sx={{
          backgroundColor: (theme) => `${theme.palette.background.paper}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          py: 1,
        }}
      >
        <Toolbar variant="dense" sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            color="inherit"
            noWrap
            sx={{ marginRight: "auto", "&:hover": { color: "primary" } }}
          >
            Authentication System
          </Typography>
          <ThemeModeSwitch />
          <nav id="navbar">
            {!token ? (
              <>
                {" "}
                <NavButton
                  to="/register"
                  color="inherit"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Register
                </NavButton>
                <NavButton
                  to="/signin"
                  color="inherit"
                  sx={{
                    mx: 1.5,
                  }}
                >
                  Sign In
                </NavButton>
              </>
            ) : (
              <>
                <NavButton
                  to="/"
                  color="inherit"
                  sx={{
                    mx: 1.5,
                  }}
                  onClick={onSignOutHandeler}
                  activated={false}
                >
                  Log Out
                </NavButton>
              </>
            )}
          </nav>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
