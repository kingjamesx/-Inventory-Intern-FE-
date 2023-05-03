<template>
  <div class="container">
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
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #e5e5e5;
}
</style>
