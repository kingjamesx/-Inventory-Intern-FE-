<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      :definitions="{
        bold: { icon: B, tip: 'My bold tooltip' },
      }"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      editor: ref("Your text goes here"),
    };
  },
};
</script>
