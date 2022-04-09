import { useDispatch } from "react-redux";
import "./login.scss";
import { action as loginUser } from "../../../store/actionTypes/auth/loginUser";
import { Link } from "react-router-dom";
import "./login.scss";
import { Formik, Form } from "formik";
import { ArrowForward } from "@mui/icons-material";
import { InputComponent } from "../../../components/index";
import { connect } from "react-redux";

const LoginComponent = ({ login, history }) => {
  const dispatch = useDispatch();
  const logUser = (values) => {
    dispatch(loginUser(values, history));
  };

  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <div className="content-info">
        <div className=" w-100 text-center h-100 px-4 py-2">
          <Formik
            initialValues={{
              usuario: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              Object.keys(values).map((item) => {
                if (!values[item]) errors[item] = "Campo requerido";
              });
              return errors;
            }}
            onSubmit={(values) => {
              logUser(values);
            }}
          >
            {() => (
              <Form>
                <div className="h2 w-100 m-0 text-center text-light no-selection">
                  Bienvenido
                </div>
                <div className="content-login mt-3 w-100">
                  <InputComponent
                    name={"usuario"}
                    type={"text"}
                    placeholder={"usuario"}
                    componentError={"div"}
                    classNameInput={"form-control w-100"}
                    classNameError={"small text-danger"}
                  />
                  <InputComponent
                    name={"password"}
                    type={"password"}
                    placeholder={"contraseña"}
                    componentError={"div"}
                    classNameInput={"form-control w-100"}
                    classNameError={"small text-danger"}
                  />
                  <div className="small text-danger">{login.errorLogin}</div>
                  <div className="small text-left d-flex justify-content-between text-primary">
                    <Link to="/forgot-password">
                      <span className="no-selection">Olvide mi contraseña</span>
                    </Link>
                    <button type="submit" className="m-0 btn btn-primary ">
                      <ArrowForward />
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => state, {})(LoginComponent);
