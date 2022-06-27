import React from "react";
import routesLayout from "../../routes/route/layouts";
import { DrawerItem } from "./DrawerItem";

export const DrawerListItems = () => {
  return (
    <>
      <DrawerItem items={routesLayout} />
    </>
  );
};

