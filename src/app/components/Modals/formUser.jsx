import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createUser } from '../../store/actions'
const style = {
    field50: {
        width: '50%',

    }
}

const FormUser = ({ trigger, label, typeUser }) => {
    const [open, setOpen] = React.useState(false)
    const dispatcher = useDispatch()


    const toggle = () => setOpen(!open)
    const login = (data) => {
        console.log(data)
        dispatcher(createUser(data, typeUser,
            ()=>setOpen(false)))
    }

    return <>
        <div>
            <span onClick={toggle}>{trigger}</span>
        </div>
        {open ?
            <div className="w-100 h-100 position-fixed d-flex justify-content-center align-items-center" style={{ top: 0, left: 0, zIndex: 9999, background: 'rgba(1,1,1,.4)' }}>
                <div className="bg-light p-3 border-rounded rounded">
                    <div className="h4">
                        Registro {label}
                    </div>
                    <Formik
                        initialValues={{
                            usuario: "",
                            correo: "",
                            nombre: "",
                            paterno: "",
                            materno: "",
                            telefono: ""
                        }}
                        validate={values => {
                            const errors = {};
                            //Object.keys(values).map(
                            //    item => {
                            //        if (!values[item])
                            //            errors[item] = "Campo requerido"
                            //        else {
                            //            if (item === "correo" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[item]))
                            //                errors[item] = "Correo invalido"
                            //        }
                            //    }
                            //)
                            return errors;
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            login(values)
                        }}>
                        {({ isSubmitting }) => (
                            <Form >
                                <div className="col-md-12" >
                                    <InputField
                                        type="text"
                                        name="usuario"
                                        placeholder="usuario"
                                    />
                                    <InputField
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre"
                                    />
                                    <div className="d-flex">
                                        <div className="col-md-6">
                                            <InputField
                                                type="text"
                                                name="materno"
                                                placeholder="Materno"
                                            />

                                        </div>
                                        <div className="col-md-6">
                                            <InputField
                                                type="text"
                                                name="paterno"
                                                placeholder="Paterno"
                                            />
                                        </div>
                                    </div>
                                    <InputField
                                        type="text"
                                        name="correo"
                                        placeholder="Correo electronico"
                                    />
                                    <InputField
                                        type="text"
                                        name="telefono"
                                        placeholder="Telefono"
                                    />
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-primary">
                                        Registrar
                                    </button>{' '}
                                    <button onClick={toggle} className="btn btn-secondary">
                                        Cancel
                                    </button>


                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
            : null}
    </>

}

const InputField = (props) => {
    return <div className="py-3" >
        <Field   {...props} className="form-control" />
        <ErrorMessage name={props?.name} component="div" className="small text-danger" />
    </div>
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default FormUser