import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonProps } from "@mui/material/Button";
const NavButton: React.FC<
  ButtonProps & { to: string; activated?: boolean }
> = ({ children, to, activated, ...props }) => (
  <NavLink to={to} style={{ color: "inherit" }}>
    {({ isActive }) => {
      isActive = activated ?? isActive;
      console.log(isActive);
      return (
        <Button
          {...props}
          variant={isActive ? "text" : "outlined"}
          sx={
            isActive
              ? props.sx
              : {
                  ...props.sx,
                  backgroundColor: (theme) => `${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: (theme) =>
                      `${theme.palette.secondary.main}`,
                  },
                }
          }
        >
          {children}
        </Button>
      );
    }}
  </NavLink>
);

/*
variant="outlined"
    color="inherit"
    sx={{
      mx: 1.5,
      backgroundColor: (theme) => `${theme.palette.primary.main}`,
      "&:hover": {
        backgroundColor: (theme) => `${theme.palette.secondary.main}`,
      },
    }}
*/
export default NavButton;
