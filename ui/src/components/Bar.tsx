import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

interface Props {
  children: React.ReactNode;
}

export default function Bar({ children }: Props) {
  return (
    <Box width="100%" borderBottom="2px solid gray" borderTop="2px solid gray">
      <AppBar position="static" color="transparent">
        <Toolbar style={{ justifyContent: "space-between" }}>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
