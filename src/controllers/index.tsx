import axios from "axios";
import { UserController } from "./UserController";
import config from "../constants/Config";
import { dispatch } from "src/models/Store";

export const appClient = axios.create({
  baseURL: config.apiGatewayUrl,
  timeout: 10000,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

appClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch.authen.logout();
      } else if (error.response.status === 403) {
      } else if (error.response.status && error.response.status >= 500) {
      } else if (
        error.response.status &&
        error.response.status === 400 &&
        error.response.data
      ) {
      } else {
      }
    } else {
    }
    return Promise.reject(error);
  }
);


export const userController = new UserController(config.apiGatewayUrl, appClient);
