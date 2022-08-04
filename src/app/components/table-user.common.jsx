import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { InjectProviders } from "../helpers/injectProviders";
import CreateUserModalComponent from "../modals/create-user.modal";
import { UserProvider } from "../store/providers/user.provider";
import FormUserComponent from "./form-user.common";
import { TableComponent } from "./table";

const legends = {
  admin: "Administradores",
  student: "Estudiantes",
  teacher: "Docentes",
  coord: "Coordinadores",
};

class TableUserComponent extends Component {
  constructor(props) {
    super(props);
    this.configTableAdmin = {
      user: {
        name: "username",
      },
      name: {
        name: "Nombre",
      },
      last: {
        name: "Apellido paterno",
      },
      secondLast: {
        name: "Apellido materno",
      },
      email: {
        name: "Correo",
      },
      phone: {
        name: "Teléfono",
      },
      status: {
        name: "status",
      },
    };
    this.state = {
      init: false,
      dataTable: [],
      isLoading: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const { userProvider, userType } = this.props;
    if (!this.state.isLoading) {
      this.setState({
        isLoading: true,
      });

      const response = await userProvider.getUsers(userType);
      const dataTable = response.data.map((user) => ({
        ...user,
        status: user.status.name,
      }));
      this.setState({
        dataTable,
      });
      this.setState({
        isLoading: false,
      });
    }
  };

  render = () => {
    const { userType } = this.props;
    const { dataTable, isLoading } = this.state;
    return (
      <div className="p-3 w-100 m-auto">
        <div className="w-100 d-flex justify-content-between align-items-center py-3">
          <div className="h2 d-flex align-items-center">
            {legends[userType]}
          </div>
          <div>
            <FormUserComponent
              okCreate={this.getUsers}
              userProvider={this.props.userProvider}
              userType={userType}
              className="w-100"
            ></FormUserComponent>
          </div>
        </div>
        <TableComponent
          isLoading={isLoading}
          data={dataTable}
          settings={this.configTableAdmin}
        ></TableComponent>
      </div>
    );
  };
}

export default InjectProviders(TableUserComponent, {
  userProvider: new UserProvider(),
});
