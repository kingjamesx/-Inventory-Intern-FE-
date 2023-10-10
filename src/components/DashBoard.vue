<template>
  <q-page class="container">
    <div class="Top-board">
      <img :src="Dashboard" alt="" />
      <div class="mini-top-bar">
        <h4>Never worry about your Inventory</h4>
        <q-btn label="create a bill" class="button" />
      </div>
    </div>
    <div class="q-pa-md row items-start q-gutter-md" id="Btn-wrapper">
      <q-card class="my-card">
        <q-card-section
          >Out of stock products
          <q-icon name="warning_amber" color="pink" />
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section
          >products on low stock
          <q-icon name="warning_amber" color="blue" />
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section>
          Number of products to be arrived
          <q-icon name="fire_truck" color="green" />
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section
          >Stock percentage
          <q-icon name="pie_chart" color="red" />
        </q-card-section>
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
.container {
  padding: 0px 50px;
}
.my-card {
  width: 100%;
  max-width: 250px;
  height: 100px;
  border-radius: 10px;
}

.Top-board {
  display: flex;
  justify-content: space-evenly;
  background-color: #31a3a0 !important;
  border-radius: 30px;
  width: 100%;
  margin: 50px 0px;
}

.mini-top-bar {
  padding: 1px 60px;
}

.button {
  color: white;
  margin: 0px 17px;
}

h4 {
  margin: 25px 0px;
}

img {
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
// p {
//   padding: 16px;
//   margin-top: -16px;
//   margin-left: -16px;
//   align-items: flex-start;
//   display: flex;
//   flex-wrap: wrap;
// }

@media (max-width: 768px) {
  .container {
    padding: 0px 1px;
  }

  .Top-board {
    display: block;
    min-height: 85vh;
    margin: 44px 0px;
    padding: 10px 25px;
    // width: 100px;
  }

  img {
    padding: 20px 25px;
    width: 100%;
  }

  #Btn-wrapper {
    display: block;
    padding: 16px 60px;
  }

  .my-card {
    max-width: none;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
