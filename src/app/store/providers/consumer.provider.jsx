import axios from "axios";
import { TokenExcludedEndpoints } from "../endpoints";

export class ConsumeClass {
  HTTP_GET = async (url) => {
    return await axios
      .get(url, this.applyCredentials())
      .then(this.resolveResponse)
      .catch(this.resolveError);
  };

  HTTP_POST = async (url, data) => {
    return await axios
      .post(url, data, this.applyCredentials())
      .then(this.resolveResponse)
      .catch(this.resolveError);
  };
  HTTP_PUT = async (url, data) => {
    return await axios
      .put(url, data, this.applyCredentials())
      .then(this.resolveResponse)
      .catch(this.resolveError);
  };
  HTTP_DELETE = async (url, data) => {
    return await axios
      .delete(url, data, this.applyCredentials())
      .then(this.resolveResponse)
      .catch(this.resolveError);
  };

  applyCredentials = () => {
    let req = {};
    const token = localStorage.getItem("token");
    if (token && !this.endpointExcluded(req.url)) {
      req.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return req;
  };

  resolveResponse = (response) => response.data;

  resolveError = (err) => {
    console.log(err);
    throw (
      err?.response?.data?.message || "Error de conexion, intenta mas tarde"
    );
  };
  endpointExcluded = (url) => {
    const excluded =
      TokenExcludedEndpoints.find((endpoint) => {
        return url?.includes(endpoint);
      }) || [];
    return excluded.length > 0;
  };
}
