import { boot } from "quasar/wrappers";
import axios from "axios";
import { LocalStorage } from "quasar";

const api = axios.create({
  baseURL: "https://2d69-102-89-40-139.ngrok-free.app/",

  headers: {
    Authorization: `Bearer token`,
  },
});

// Set authorization header for all requests
api.interceptors.request.use((config) => {
  const token = LocalStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
