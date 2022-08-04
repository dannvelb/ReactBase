import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ButtonComponent from "../components/button.common";
import InputComponent from "../components/input.common";
import { legends } from "../const/const";
import { InjectProviders } from "../helpers/injectProviders";
import { UserProvider } from "../store/providers/user.provider";

export const CreateUserModalComponent = ({
  userProvider,
  userType,
  okCreate,
  onHide,
  show,
}) => {
  const [loading, setLoading] = useState(false);
  const submitUser = async (newUser) => {
    setLoading(true);
    const response = await userProvider.createUser(userType, newUser);
    if (response) {
      onHide();
      okCreate();
    }
    setLoading(false);
  };
  const form = useFormik({
    initialValues: {
      user: "",
      email: "",
      name: "",
      last: "",
      secondLast: "",
      phone: "",
    },
    enableReinitialize: true,
    validate: (values) => {},
    onSubmit: submitUser,
  });
  return (
    <>
      <Form onSubmit={form.handleSubmit}>
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton={onHide}>
            <Modal.Title id="contained-modal-title-vcenter">
              Agregar {legends[userType]}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="w-100 d-flex flex-wrap pb-3">
              <div className="col-md-6 col-12 px-1">
                <InputComponent
                  label="Nickname:"
                  placeholder="nickname"
                  name="user"
                  onChange={form.handleChange}
                  error={form.errors.user}
                />
              </div>
              <div className="col-md-6 col-12 px-1">
                <InputComponent
                  label="E-mail:"
                  placeholder="ejemplo@ejemplo.com"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  error={form.errors.email}
                />
              </div>
              <div className=" col-12 px-1">
                <InputComponent
                  label="Nombre (s):"
                  placeholder="Nombre (s)"
                  name="name"
                  onChange={form.handleChange}
                  error={form.errors.name}
                />
              </div>
              <div className="col-12 py-0 px-1">Apellidos</div>
              <div className="col-md-6 col-12 px-1">
                <InputComponent
                  placeholder="Paterno"
                  name="last"
                  onChange={form.handleChange}
                  error={form.errors.last}
                />
              </div>
              <div className="col-md-6 col-12 px-1">
                <InputComponent
                  placeholder="Materno"
                  name="secondLast"
                  onChange={form.handleChange}
                  error={form.errors.secondLast}
                />
              </div>

              <div className=" col-12 px-1">
                <InputComponent
                  label="Telefono"
                  placeholder="Telefono"
                  name="phone"
                  error={form.errors.phone}
                  onChange={form.handleChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
            <ButtonComponent
              isLoading={loading}
              label="Agregar usuario"
              onClick={form.handleSubmit}
            />
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default InjectProviders(CreateUserModalComponent, {
  userProvider: new UserProvider(),
});
