import React, { Component } from "react";
import TableUserComponent from "../../../components/table-user.common";

export default class StudentPageClass extends Component {
  render = () => (
    <div>
      <TableUserComponent
        userType="student"
      />
    </div>
  );
}
