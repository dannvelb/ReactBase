import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateUserModalComponent from "../modals/create-user.modal";

export const FormUserComponent = ({ userType, okCreate }) => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <>
      <Button onClick={toggleModal}>Agregar usuario</Button>
      <CreateUserModalComponent
        userType={userType}
        show={show}
        onHide={toggleModal}
        okCreate={okCreate}
      />
    </>
  );
};

export default FormUserComponent;
