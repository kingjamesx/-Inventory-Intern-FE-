<template>
  <q-select
    filled
    v-model="selectMessages"
    :options="options"
    class="q-mb-md"
  />
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "SelectInput",
  props: ["selectMessage"],

  setup(props) {
    const selectMessages = ref(props.selectMessage);

    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      selectMessages,
    };
  },
});
</script>
