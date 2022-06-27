import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Icon } from "@mui/material";
import DrawerContext from "../../context/drawer/DrawerContext";
import {
  AppBar,
  styleMain,
  styleToolbar,
} from "../../styles/drawer";
import { DrawerListItems } from "./DrawerListItems";
import { mdTheme } from "../../styles/themeApp";
import { Rutas } from "./Routes";

export default function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
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
        <Drawer variant="permanent" open={open}>
          <Toolbar sx={styleToolbar}>
            <IconButton onClick={toggleDrawer}>
              <Icon>chevron_left</Icon>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <DrawerContext.Provider value={{ open, toggleDrawer }}>
              <DrawerListItems />
            </DrawerContext.Provider>
          </List>
        </Drawer>
        <Box component="main" sx={styleMain}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container>
              <Rutas />
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
