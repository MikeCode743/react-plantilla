import React from "react";
import ProtoTypes from "prop-types";
import { DrawerItem } from "./DrawerItem";
import routesLayout from "../../routes/layouts";

export const DrawerListItems = () => {
  return (
    <>
      <DrawerItem items={routesLayout} />
    </>
  );
};

