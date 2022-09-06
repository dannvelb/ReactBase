import React, { FunctionComponent } from "react";

import { MenuIcon } from "../../../assets/icons";
import "../components.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ButtonComponent from "../button.common";
import useCommonHelper from "../../helpers/common.helper";
import { Link } from "react-router-dom";

// import React from 'react'

type TSideBarComponent = {
  toogleSidebar: CallableFunction;
};

export const SideBarComponent: FunctionComponent<TSideBarComponent> = (
  props
) => {
  const {
    state: {
      session: { user, menu: menus },
    },
    dispatch,
  } = useCommonHelper();

  const { toogleSidebar } = props;
  return (
    <div className="w-100 p-2 position-relative">
      <div className=" small-button-side px-4">
        <div>
          <ButtonComponent onClick={toogleSidebar}>
            <MenuIcon />
          </ButtonComponent>
        </div>
      </div>
      <div className="text-light p-3 ">
        <div>
          {user?.name} {user?.last}
        </div>
        <div className="small "></div>
      </div>
      <div>
        {menus.map((menu: any, index) => (
          <div key={index}>
            {menu.children.length > 0 ? (
              <>
                <Accordion className="bg-primary text-light p-0 m-0">
                  <AccordionSummary className="my-0">
                    {menu.title}
                  </AccordionSummary>
                  <AccordionDetails className="m-0 p-0">
                    {menu.children.map((submenu, index) => (
                      <div key={index} className="text-light py-1 px-4">
                        <Link className="text-light menuLink" to={submenu.path}>
                          {submenu.title}
                        </Link>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </>
            ) : (
              <>
                <div className="text-light px-1 py-0 small">{menu.title}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarComponent;
