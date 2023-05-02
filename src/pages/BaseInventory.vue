<template>
  <div class="container">
    <q-btn >Test</q-btn>
    <SearchField />
    <TableList />
  </div>
</template>

<script>
import SearchField from "src/components/InventoryList/SearchField.vue";
import TableList from "src/components/InventoryList/TableList.vue";
export default {
  components: {
    SearchField,
    TableList,
  },
  methods:{
          // async test(){
          //   try{ 
          // const reponse=this.$api.get("/inventory/all")
          // console.log(response)
                 
          //   }catch(error){
          //     console.log(error.message)
          //   }
          //  }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #e5e5e5;
}
</style>
