<template>
  <q-form class="column q-pa-md shadow-2">
    <label>Product Name</label>
    <LongInput :placeholder="'Canon EOS Rebel T7'" />
    <SelectInput />
    <textarea name="body" placeholder="Your text goes here" class="q-mb-md" />
    <div class="flex q-ml-md">
      <LongInput :placeholder="'Selling price'" />
      <LongInput :placeholder="'Cost price'" />
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from "vue";
import LongInput from "components/LongInput.vue";
import SelectInput from "./SelectInput.vue";

export default defineComponent({
  name: "MainForm",
  components: { LongInput, SelectInput },
});
</script>
