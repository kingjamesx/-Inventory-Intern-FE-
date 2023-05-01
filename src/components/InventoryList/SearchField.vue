<template>
  <div class="top-bar">
    <p class="text-weight-bold q-my-md">InventoryList</p>
    <q-form class="search">
      <q-select
        outlined
        v-model="model"
        :options="options"
        label="warehouse"
        class="select-input"
      />
      <q-input
        filled
        v-model="ph"
        placeholder="Find Something"
        :dense="dense"
        class="select-input"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      ph: ref(""),
      dense: ref(false),
      model: ref(null),
      options: ["Jumia", "Jiji", "Konga", "AliExpress", "slot"],
    };
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  margin: 0px 32px;
  justify-content: space-between;
}
.search {
  display: flex;
}

.select-input {
  width: 160px;
  margin-right: 10px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .top-bar {
    margin: 0px 15px;
    display: block;
    margin-top: -11px;
  }
  .select-input {
    width: 100%;
    margin-right: 5px;
  }
}
</style>
