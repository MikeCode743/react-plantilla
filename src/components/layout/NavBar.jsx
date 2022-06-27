import React from "react";
import { AppBar, Icon, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = ({open, toggleDrawer}) => {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Plantilla React
        </Typography>
        {/* Option left */}
      </Toolbar>
    </AppBar>
  );
};
