import { api } from "src/boot/axios";

export async function publishProduct({ commit }, product) {
  try {
    const response = await api.post(`/inventory/publish`, product, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response);
    commit("SET_PRODUCT", response.data);
  } catch (error) {
    console.error(error);
  }
}
