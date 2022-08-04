import { ConsumeClass } from "./consumer.provider";
import { Endpoints } from "../endpoints";
import { AlertProvider } from "./alert.provider";

export class AuthProvider extends ConsumeClass {
  alertProvider = new AlertProvider();

  authGetClientExist = async (code) => {
    try {
      return await this.HTTP_GET(`${Endpoints.cliente.base}/${code}`);
    } catch (err) {
      return err;
    }
  };

  authLogin = async (request) => {
    try {
      const response = await this.HTTP_POST(`${Endpoints.auth.base}`, request);
      return response;
    } catch (err) {
      return null;
    }
  };

  getMenu = async () => {
    try {
      return await this.HTTP_GET(`${Endpoints.auth.menu}`);
    } catch (err) {
      return null;
    }
  };
}
