<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="height: max-content">
      <q-file color="teal" filled v-model="model" label="Label">
        <template v-slot:append>
          <q-icon name="cloud_upload" />
          <q-icon name="delete" />
        </template>
      </q-file>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref(null),
    };
  },
};
</script>
