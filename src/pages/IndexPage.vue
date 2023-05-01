<template>
  <q-page class="flex flex-center">
    <div>
      <!-- <q-img :src="../assets/Dashboard.jpeg" alt="" /> -->
      <img :src="Dashboard" alt="" />
      <p>Never worry about your Inventory</p>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>Out of stock products</q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section>products on low stock</q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section>Number of products to be arrived</q-card-section>
      </q-card>
    </div>
    <h1 class="text-center">Welcome to the inventory home</h1>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Dashboard from "../assets/Dashboard.jpeg";

export default defineComponent({
  name: "IndexPage",
  data: function () {
    return {
      Dashboard: Dashboard,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
