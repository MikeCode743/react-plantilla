import React, { useContext, useEffect, useState } from "react";
import {
  ListItemButton,
  Icon,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import DrawerContext from "../../context/drawer/DrawerContext";
import { Link } from "react-router-dom";

export const DrawerItem = ({ items }) => {
  const [menuItems] = useState(items);
  const [openItem, setOpenItem] = React.useState(true);
  const { open, toggleDrawer } = useContext(DrawerContext);

  const handleClick = () => {
    if (open) setOpenItem(!openItem);
    else {
      toggleDrawer();
      setOpenItem(true);
    }
  };

  useEffect(() => {
    if (!open) setOpenItem(false);
  }, [open]);

  const listItem = menuItems?.children.map((item, index) => (
      <ListItemButton
        component={Link}
        to={item.path}
        key={index}
        sx={{ pl: 4 }}
      >
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
  ));

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon>{menuItems.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={menuItems.title} />
        {menuItems.children.length > 0 ? (
          openItem ? (
            <Icon>expand_less</Icon>
          ) : (
            <Icon>expand_more</Icon>
          )
        ) : null}
      </ListItemButton>
      <Collapse in={openItem} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listItem}
        </List>
      </Collapse>
    </>
  );
};
