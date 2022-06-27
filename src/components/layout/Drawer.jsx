import React from "react";
import { DrawerComponent, styleToolbar } from "../../styles/drawer";
import { Divider, Icon, IconButton, List, Toolbar } from '@mui/material';
import DrawerContext from "../../context/drawer/DrawerContext";
import { DrawerListItems } from "./DrawerListItems";

export const Drawer = ({open, toggleDrawer}) => {
  return (
    <>
      <DrawerComponent variant="permanent" open={open}>
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
      </DrawerComponent>
    </>
  );
};
