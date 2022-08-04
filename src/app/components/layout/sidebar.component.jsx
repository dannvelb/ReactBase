import { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { AuthProvider } from "../../store/providers/auth.provider";
import { Nav, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

class SideBarComponent extends Component {
  authProvider = new AuthProvider();

  constructor(props) {
    super(props);
    this.state = {
      sidebarMenu: [],
      menusOpen: {},
    };
  }
  componentDidMount = () => {
    this.getMenu();
  };

  getMenu = async () => {
    const response = await this.authProvider.getMenu();
    if (response) {
      this.setState({
        sidebarMenu: response,
      });
    }
  };

  toogleMenu = (name) => {
    let { menusOpen } = this.state;
    menusOpen[name] = !menusOpen[name];
    this.setState({ menusOpen });
  };

  render = () => {
    const { sidebarMenu, menusOpen } = this.state;
    return (
      <div className="w-100 p-2">
        <Nav defaultActiveKey="/home" className="flex-column">
          {sidebarMenu.map((menu, index) => (
            <div key={index}>
              <Nav.Link
                onClick={() => this.toogleMenu(menu.name)}
                className="text-light"
              >
                {menu.title}
              </Nav.Link>
              <Collapse in={menusOpen[menu.name] === true}>
                <div className="px-3 text-light">
                  {menu.children.map((submenu, index) => (
                    <div key={index} className="text-light py-1 px-4">
                      <Link className="text-light" to={submenu.path}>{submenu.title}</Link>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          ))}
        </Nav>
      </div>
    );
  };
}

export default connect((state) => state, {})(SideBarComponent);
