import React, { Component } from "react";
import TableUserComponent from "../../../components/table-user.common";

export default class TeacherPageClass extends Component {
  render = () => (
    <div>
      <TableUserComponent
        userType="teacher"
      />
    </div>
  );
}
