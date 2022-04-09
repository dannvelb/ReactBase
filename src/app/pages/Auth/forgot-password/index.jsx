import { Link } from "react-router-dom";

const ResetPassword = (props) => {
  return (
    <div className="content-info">
      <div className="h2 text-center text-light no-selection">
        Recuperar contraseña
      </div>
      <div className="h6 text-center text-light w-75 mx-auto my-3 no-selection">
        Introduce tu usuario, enviaremos un correo con instrucciones para
        reiniciar tu contraseña
      </div>
      <div className="content-login  mt-4 mx-auto">
        <div className="input-group">
          <input type="text" placeholder="Usuario" className="form-control" />
        </div>
        <div className="small no-selection ">
          Si no lo recuerdas comunicate con tu institución para obtenerlo.
        </div>
      </div>
      <div className=" w-100 m-auto d-flex  justify-content-between align-items-center">
        <div>
          <Link to="/">
            <span className="no-selection small">Regresar</span>
          </Link>
        </div>
        <div>
          <button type="button" className="my-3 btn btn-primary ">
            Recuperar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
