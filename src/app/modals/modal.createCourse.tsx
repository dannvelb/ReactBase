import { useFormik } from "formik";
import React, { FunctionComponent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ButtonComponent from "../components/button.common";

import InputComponentCommon from "../components/input.component";
import { CallBackConst, NumberConst } from "../const/const";
import useCommonHelper from "../helpers/common.helper";
import { ValidateForm } from "../helpers/helper.validate-form";
import { InjectProviders } from "../helpers/index";
import {
	configCourses,
	TCourseCreate,
	TypesCourses,
} from "../models/data/data.course";
import { CourseProvider } from "../providers/course.provider";

type TCreateCourseModal = {
	degreeId: number;
	okCreate: Function;
};

export const CreateCourseModal: FunctionComponent<TCreateCourseModal> = ({
	degreeId,
	okCreate,
}) => {
	const {
		translate,
		errResolve,
		showAlert,
	} = useCommonHelper();
	const [show, setShow] = useState(false);
	const toggleModal = () => setShow(!show);

	const onCompleteOk = () => {
		showAlert(`${translate("Curso creado")}`, "success");
		setShow(false);
		okCreate();
		form.setValues(form.initialValues);
		form.setErrors({});
	};

	const onSubmit = async (newCourse) => {

		CourseProvider.create({
			...newCourse,
			degreeId,
		})
			.then(onCompleteOk)
			.catch(errResolve);
	};

	const form = useFormik({
		initialValues: {
			code: "",
			description: "",
			name: "",
		},
		enableReinitialize: true,
		validate: ValidateForm,
		onSubmit,
	});
	return (
		<>
			<div>
				<ButtonComponent
					variant="contained"
					isLoading={false}
					onClick={toggleModal}>
					{translate("Crear materia")}
				</ButtonComponent>
			</div>
			<Form onSubmit={form.handleSubmit}>
				<Modal
					show={show}
					onHide={toggleModal}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header closeButton={!false}>
						<Modal.Title id="contained-modal-title-vcenter">
							{translate("Crear materia")}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="w-100 d-flex flex-wrap pb-3">
							<div className="col-md-6 col-12 px-1">
								<InputComponentCommon
									label={translate("commons.forms.code")}
									name="code"
									type="text"
									value={form.values.code}
									onChangeName={form.setFieldValue}
									error={form.errors.code}
								/>
							</div>

							<div className=" col-12 px-1">
								<InputComponentCommon
									label={translate("commons.forms.name")}
									name="name"
									type="text"
									value={form.values.name}
									onChangeName={form.setFieldValue}
									error={form.errors.name}
								/>
							</div>
							<div className=" col-12 px-1">
								<InputComponentCommon
									label={translate("commons.forms.description")}
									name="description"
									type="text"
									value={form.values.description}
									onChangeName={form.setFieldValue}
									error={form.errors.description}
								/>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<ButtonComponent
							isLoading={false}
							label={translate("commons.create")}
							onClick={form.handleSubmit}
						/>
					</Modal.Footer>
				</Modal>
			</Form>
		</>
	);
};

export default CreateCourseModal;
