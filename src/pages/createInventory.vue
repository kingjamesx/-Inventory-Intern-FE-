<template>
  <q-page class="flex-center">
    <div>
      <h4 class="q-my-md">Inventory</h4>
    </div>
    <q-card>
      <MainForm />
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MainForm from "src/components/MainForm.vue";

export default defineComponent({
  name: "createInventory",
  components: { MainForm },
});
</script>
