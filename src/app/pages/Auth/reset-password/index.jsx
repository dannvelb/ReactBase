
const ResetPassword = (props) => {
    return (
        <div  className="content-info">
            <div className="h2 text-center text-light no-selection">Reinicio de contraseña</div>
            <div className="h6 text-center text-light no-selection">
                hola usuario
            </div>
            <div className="h6 text-center text-ligh no-selectiont">
                Introduce tu nueva contraseña
            </div>
            <div className="content-login  mt-4 mx-auto">
                <div class="input-group mb-3">
                    <input type="text" placeholder="Contraseña" className="form-control" />
                </div>
                <div class="input-group mb-3">
                    <input type="password" placeholder="Repite contraseña" className="form-control" />
                </div>
            </div>
            <div className="text-right w-100 m-auto ">
                <button type="button" className="my-3 btn btn-primary ">Reiniciar</button>
            </div>
        </div>
    );
}

export default ResetPassword;
