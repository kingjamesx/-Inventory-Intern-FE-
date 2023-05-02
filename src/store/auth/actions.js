/*
export function someAction (context) {
}
*/

// export function register ({ commit }, form) {
//   return api.post('/auth/register', {...form})
//     .then(response => {
//       api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
//       commit('login', {token: response.data.access_token, user: response})
//     })
// }

// export function login({ commit }, loginData) {
//   return commit("login", { loginData });
// }

// export async function logout({ commit }) {
//   await commit("login", null);
// }

import { api } from "src/boot/axios";

export function login({ commit }, loginData) {
  // store token in localstorage
  localStorage.setItem("token", loginData.data.access_token);

  return commit("login", { loginData });
}

export async function logout({ commit }) {
  await commit("login", null);
}
