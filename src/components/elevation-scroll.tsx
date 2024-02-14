import React from "react";
import { useScrollTrigger } from "@mui/material";

export const ElevationScroll = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  });
};
