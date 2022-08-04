import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import CreateCourseModalComponent from "../modals/create-course.modal";

export const FormCourseComponent = ({
  isCurriculum,
  label,
  classNameButton,
  okCreate,
  parentId,
}) => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <>
      <Button className={classNameButton} onClick={toggleModal}>
        {label}
      </Button>
      <CreateCourseModalComponent
        title={isCurriculum ? "Crear plan de estudios" : "Crear materia"}
        show={show}
        isCurriculum={isCurriculum}
        onHide={toggleModal}
        okCreate={okCreate}
        parentId={parentId}
      />
    </>
  );
};

export default FormCourseComponent;
