  import { useFormik } from "formik";
import { Form } from "react-bootstrap";

export const AuthFormLogin = ({ loginAction: onSubmit }) => {
  const formLogin = useFormik({
    initialValues: {
      usuario: "",
      pass: "",
    },
    validate: (values) => {
      const errors = {};
      Object.keys(values).map((item) => {
        if (!values[item]) errors[item] = "Campo requerido";
      });
      return errors;
    },
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={formLogin.handleSubmit}>
        <div className="content-login mt-3 w-100">
          <Form.Control
            placeholder="usuario"
            type="text"
            name="usuario"
            value={formLogin.values.usuario}
            onChange={formLogin.handleChange}
          />

          <Form.Control
            placeholder="contraseña"
            type="password"
            name="pass"
            value={formLogin.values.pass}
            onChange={formLogin.handleChange}
          />

          <div className="d-none small text-danger">''</div>
          <div className="small text-left d-flex justify-content-end text-primary">
            <button type="submit" className="m-0 btn btn-primary ">
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
