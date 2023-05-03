<template>
  <q-page class="flex">
    <div class="Top-board">
      <img :src="Dashboard" alt="" />
      <div>
        <div class="btns">
          <h4>Never worry about your Inventory</h4>
        </div>
        <div>
          <q-btn label="Create an Inventory" class="button" />
        </div>
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
  justify-content: space-evenly;
  background-color: #31a3a0;
  border-radius: 30px;
  width: 100%;
  margin: 50px 40px;
  color: white;
  flex-wrap: wrap;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .Top-board {
    justify-content: center;
  }
}

img {
  // width: 250px;
  padding: 20px 10px;
  border-radius: 100%;
  max-width: 250px;
  height: 250px;
  margin-top: 20px;
}

.btns {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button {
  margin-bottom: 10px;
}
p {
}
</style>
