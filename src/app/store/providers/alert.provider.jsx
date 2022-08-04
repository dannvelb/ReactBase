import Swal, { SweetAlertIcon } from "sweetalert2";
import { ConsumeClass } from "./consumer.provider";

export const HttpStatusMessages = {
  300: "Ocurrió un error inesperado",
  401: "Sesion expirada",
  404: "Ocurrió un error en el servidor, el tiempo de espera se ha agotado",
  0: "No hay conexión con el servidor",
};
export class AlertProvider extends ConsumeClass {
  httpError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error,
      confirmButtonColor: "#004e97",
      allowOutsideClick: false,
    });
  };
}
