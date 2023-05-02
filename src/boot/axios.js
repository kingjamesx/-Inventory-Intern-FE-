import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: "https://eb2a-102-89-40-139.ngrok-free.app",
  headers: {
    Authorization: `Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDUwNzNjZS1mMDVjLTQ5YTMtYTBkZS0wY2ViMmYwM2EwMGUiLCJuYW1lIjoib2tvcm8gR2lmdCIsImVtYWlsIjoia3Jpc3RhZ2lmdEBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2ODI5NzQ1ODAsImV4cCI6MTY4Mjk3ODE4MH0.KKCnWY1C79KYHPirIjGue5FtLQ3gTesNluAJr5GPkxI`,
  },
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
