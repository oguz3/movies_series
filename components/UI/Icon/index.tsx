import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("./selection.json");

const Icon = ({ ...props }) => {
  //@ts-ignore
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
