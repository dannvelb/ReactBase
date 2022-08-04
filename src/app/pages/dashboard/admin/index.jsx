import React, { Component } from "react";
import TableUserComponent from "../../../components/table-user.common";

export default class AdminPageClass extends Component {
  componentDidMount() {
  }

  render = () => (
    <div className="">
      <TableUserComponent
        userType="admin"
      />
    </div>
  );
}
