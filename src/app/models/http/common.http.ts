import { NumberConst, StringConst } from "../../const/const";


export class HTTPErrorResponse {
  error: string;
  message: string;
  statusCode: number;
  constructor() {
    this.error = StringConst.empty;
    this.message = 'Error desconocido, intenta mas tarde';
    this.statusCode = NumberConst.zero;
  }
}