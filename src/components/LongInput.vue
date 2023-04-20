<template>
  <q-input outlined class="q-mb-md" v-model="messages" />
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "LongInput",
  props: ["message"],
  setup(props) {
    const messages = ref(props.message);

    return {
      messages,
    };
  },
});
</script>
