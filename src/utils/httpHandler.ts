import DomainInfo from "./DomainInfo";
import axios from "axios";

interface HttpHandler {
  get: any;
  post: any;
  patch: any;
  delete: any;
  postFile: any;
}

const httpHandler: HttpHandler = {
  get: function (path: string, params: any) {
    const transport = axios.create({ withCredentials: true });

    return new Promise(function (resolve, reject) {
      transport
        .get(DomainInfo.baseUrl + path, { params: params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          handleError(reject, error);
        });
    });
  },
  post: function (path: string, body: any) {
    const transport = axios.create({ withCredentials: true });
    return new Promise(function (resolve, reject) {
      transport
        .post(DomainInfo.baseUrl + path, body)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          handleError(reject, error);
        });
    });
  },
  patch: function (path: string, body: any) {
    const transport = axios.create({ withCredentials: true });
    return new Promise(function (resolve, reject) {
      transport
        .patch(DomainInfo.baseUrl + path, body)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          handleError(reject, error);
        });
    });
  },
  delete: function (path: string, params: any) {
    const transport = axios.create({ withCredentials: true });
    return new Promise(function (resolve, reject) {
      transport
        .delete(DomainInfo.baseUrl + path, { data: params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          handleError(reject, error);
        });
    });
  },
  postFile: function (path: string, body: any, params: any) {
    const transport = axios.create({ withCredentials: true });
    return new Promise(function (resolve, reject) {
      transport
        .post(DomainInfo.baseUrl + path, body, {
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 0,
          params: params,
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          handleError(reject, error);
        });
    });
  },
};

const handleError = function (reject: any, error: any) {
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 426) {
      localStorage.setItem("beforeLogin", window.location.pathname);
      window.location.href = "/";
    } else if (error.response.data) {
      console.log("error looks like: ", error.response.data);
      reject(error.response.data);
    }
  } else {
    reject("");
  }
};

export default httpHandler;
