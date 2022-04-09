import axios from "axios";
export const httpGet = (url) => {
  axios.defaults.headers.common =
    TokenExcludedEndpoints.filter((item) => url.includes(item)).length === 0
      ? {
          Authorization: `Bearer ${localStorage.getItem("token")?.toString()}`,
        }
      : {};
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw getErrorMessage(err);
    });
};

export const httpPost = (url, data) => {
  console.log(url)
  console.log(data)
  console.log('here')
    axios.defaults.headers.common =
    TokenExcludedEndpoints.filter((item) => url.includes(item)).length === 0
      ? {
          Authorization: `Bearer ${localStorage.getItem("token")?.toString()}`,
        }
      : {};
  return axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw getErrorMessage(err);
    });
};

export const httpPut = (url, data) => {
  return axios
    .put(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw getErrorMessage(err);
    });
};

export const httpDelete = (url, data) => {
  return axios
    .delete(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw getErrorMessage(err);
    });
};

export const TokenExcludedEndpoints = ["http://localhost:1337"];

const getErrorMessage = (err) => {
  return err?.response?.data?.message || "Error de conexion, intenta mas tarde";
};
