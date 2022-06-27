import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import { mdTheme } from "./styles/themeApp";
import { NavBar } from "./components/layout/NavBar";
import { Drawer } from './components/layout/Drawer';
import { Content } from "./components/layout/Content";
import Routes from './routes/Routes';

function App() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <NavBar open={open} toggleDrawer={toggleDrawer} />
          <Drawer open={open} toggleDrawer={toggleDrawer} />
          <Content />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
