<template>
  <q-select
    filled
    v-model="selected"
    @change="$emit('input', selected)"
    class="q-mb-lg input"
  />
</template>

<script>
export default {
  name: "SelectInput",
  props: ["selectMessage"],

  data() {
    return {
      model: this.selectMessages,
      selected: "",
    };
  },
};
</script>
