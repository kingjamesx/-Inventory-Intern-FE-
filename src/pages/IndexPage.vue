<template>
  <q-page class="flex">
    <div class="Top-board">
      <img :src="Dashboard" alt="" />
      <div>
        <h4>Never worry about your Inventory</h4>
        <q-btn label="create a bill" />
      </div>
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
      <q-card class="my-card">
        <q-card-section>Stock percentage</q-card-section>
      </q-card>
    </div>
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
  height: 100px;
  border-radius: 10px;
}

.Top-board {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #a1a9c1;
  border-radius: 30px;
  height: 40vh;
  width: 100%;
  margin: 50px 40px;
}

img {
  // width: 250px;
  padding: 20px 10px;
}

p {
}
</style>
