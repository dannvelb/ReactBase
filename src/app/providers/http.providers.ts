import axios, { AxiosRequestConfig } from "axios";
import { HTTPErrorResponse } from "../models/http/common.http";
import { TokenExcludedEndpoints } from "../store/endpoints";

const endpointExcluded = (url) => {
    const excluded =
      TokenExcludedEndpoints.find((endpoint) => {
        return url?.includes(endpoint);
      }) || [];
    return excluded.length > 0;
  };
  const applyCredentials = (url:string) => {
    let req: AxiosRequestConfig = {};
    const token = localStorage.getItem("token");
    if (token && !endpointExcluded(url)) {
      req.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return req;
  };
  
  const resolveResponse = (response) => response.data;
  
  const resolveError = (err):HTTPErrorResponse => {
    const error: HTTPErrorResponse = {
      ...new HTTPErrorResponse(),
      ...err.response.data,
    };
    throw error;
  };
  
  const httpGet = (url: string): Promise<any> => {
    return axios
      .get(url, applyCredentials(url))
      .then(resolveResponse)
      .catch(resolveError);
  };
  
  const httpPost = (url: string, data: any): Promise<any> => {
    return axios
      .post(url, data, applyCredentials(url))
      .then(resolveResponse)
      .catch(resolveError);
  };
  
  const httpPut = (url: string, data: any): Promise<any> => {
    return axios
      .put(url, data, applyCredentials(url))
      .then(resolveResponse)
      .catch(resolveError);
  };
  
  const httpDelete = (url: string): Promise<any> => {
    return axios
      .delete(url, applyCredentials(url))
      .then(resolveResponse)
      .catch(resolveError);
  };
  
  export const HttpProvider = {
    get: httpGet,
    post: httpPost,
    put: httpPut,
    delete: httpDelete,
  };