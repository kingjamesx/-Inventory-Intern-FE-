<template>
  <q-select
    outlined
    v-model="model"
    :options="options"
    label="select product category"
    class="q-mb-md"
  />
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "SelectInput",

  setup() {
    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
});
</script>
