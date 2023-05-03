<template>
  <div>
    <div class="q-gutter-sm">
      <q-editor
        :value="message"
        @input="$emit('update:message', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
      default: "",
    },
  },

  // data() {
  //   return {
  //     editor: this.text,
  //   };
  // },
};
</script>
