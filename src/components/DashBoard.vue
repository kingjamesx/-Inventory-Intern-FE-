<template>
  <q-page class="container">
    <div class="Top-board">
      <img :src="Dashboard" alt="" />
      <div class="mini-top-bar">
        <h4>Never worry about your Inventory</h4>
        <q-btn label="create a bill" class="button" />
      </div>
    </div>
    <h3>Products</h3>
    <div v-if="products.length>0" class="products-container">
      <q-card class="card-box" v-for="item in products" :key="item.id">
      <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
      <img :src="item.imageUrl[0]">

      <q-card-section>
        <div class="text-h6">{{ item.productName }}</div>
        <div class="text-subtitle2">₦{{ item.sellingPrice }}</div>
      </q-card-section>

      <!-- <q-card-section class="q-pt-none">
        Price
      </q-card-section> -->
    </q-card>
    </div>
     <div v-else>
       <h5>you don't have any products in inventory</h5>
     </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Dashboard from "../assets/Dashboard.jpeg";

export default defineComponent({
  name: "IndexPage",
  async created() {
     this.getInventories()
  },
  data(){
    return{
      Dashboard: Dashboard,
      products:[]
    }
  },
  methods:{
    async getInventories() {
      try {
        let response = await this.$api.get("/inventory/all");
        this.products=response.data
        console.log(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }, 
  }
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
p {
  padding: 16px;
  margin-top: -16px;
  margin-left: -16px;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
}

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
.card-box{
  width: 100%;
  max-width: 250px;
}
.products-container{
 display: grid;
 grid-template-columns: repeat(4,1fr);
 gap: 0.5rem;
 padding-bottom: 3rem;
 @media (max-width:1200px) {
 grid-template-columns: repeat(3,1fr);
  
 }
 @media (max-width:968px) {
 grid-template-columns: repeat(2,1fr);
 }
 @media (max-width:436px) {
 grid-template-columns: repeat(1,1fr);
 place-items: center;
 }
}
</style>
