import React, { Component } from "react";
import TableUserComponent from "../../../components/table-user.common";

export default class CoordPageClass extends Component {
  render = () => (
    <div>
      <TableUserComponent
        userType="coord"
      />
    </div>
  );
}
