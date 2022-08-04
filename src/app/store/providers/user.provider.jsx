import { Endpoints } from "../endpoints";
import { ConsumeClass } from "./consumer.provider";

export class UserProvider extends ConsumeClass {
  constructor() {
    super();
  }
  getUsers = async (type) => {
    try {
      const res = await this.HTTP_GET(`${Endpoints[type].base}`);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  createUser = async (type,request) => {
    try {
      const res = await this.HTTP_POST(`${Endpoints[type].base}`,request);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
