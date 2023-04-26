<template>
  <q-page class="flex-center q-ma-lg">
    <div class="flex" style="justify-content: space-between">
      <h4 class="q-my-md">Inventory</h4>
      <div>
        <ActionButton />
      </div>
    </div>

    <MainForm />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MainForm from "src/components/MainForm.vue";
import ActionButton from "src/components/ActionButton.vue";

export default defineComponent({
  name: "createInventory",
  components: { MainForm, ActionButton },
});
</script>
