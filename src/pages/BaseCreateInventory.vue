<template>
  <q-page>
    <MainForm />
  </q-page>
</template>

<script>
import MainForm from "../components/CreationFormComponents/MainForm.vue";
import { defineComponent } from "vue";

export default {
  name: "createInventory",
  components: { MainForm },
};
</script>
