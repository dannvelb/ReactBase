import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ButtonComponent from "../components/button.common";
import InputComponent from "../components/input.common";
import { InjectProviders } from "../helpers/injectProviders";
import { CourseProvider } from "../store/providers/course.provider";

export const CreateCourseModalComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const submitCourse = async (newCourse) => {
    console.log(props);
    const { okCreate, isCurriculum, courseProvider, parentId, onHide } = props;
    setLoading(true);
    let response;
    if (isCurriculum) {
      response = await courseProvider.createCurriculum(newCourse);
    } else {
      response = await courseProvider.createCourse({
        parentId,
        ...newCourse,
      });
    }
    if (response) {
      onHide();
      okCreate();
    }
    setLoading(false);
  };

  const form = useFormik({
    initialValues: {
      code: "",
      description: "",
      name: "",
    },
    enableReinitialize: true,
    validate: (values) => {},
    onSubmit: submitCourse,
  });
  return (
    <>
      <Form onSubmit={form.handleSubmit}>
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton={props.onHide}>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="w-100 d-flex flex-wrap pb-3">
              <div className="col-md-6 col-12 px-1">
                <InputComponent
                  label="Codigo:"
                  placeholder="ABC-0123"
                  name="code"
                  onChange={form.handleChange}
                  error={form.errors.code}
                />
              </div>

              <div className=" col-12 px-1">
                <InputComponent
                  label="Nombre:"
                  placeholder="Nombre"
                  name="name"
                  onChange={form.handleChange}
                  error={form.errors.name}
                />
              </div>
              <div className=" col-12 px-1">
                <InputComponent
                  label="Descripción:"
                  placeholder="ejemplo..."
                  name="description"
                  value={form.values.description}
                  onChange={form.handleChange}
                  error={form.errors.description}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <ButtonComponent
              isLoading={loading}
              label={"Crear"}
              onClick={form.handleSubmit}
            />
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default InjectProviders(CreateCourseModalComponent, {
  courseProvider: new CourseProvider(),
});
