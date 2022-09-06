import React, { FunctionComponent } from "react";


export const TabPanelComponent = ({ value, index, children, ...other }) => {
  return (
    <div
      role="tabpanel"
      className="w-100"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

export default TabPanelComponent;
