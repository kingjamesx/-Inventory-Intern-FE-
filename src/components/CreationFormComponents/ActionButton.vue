<template>
  <div class="q-pa-lg q-gutter-sm action_button">
    <q-btn color="primary" @click="submit('Draft')" label="Save as Draft" />
    <q-btn color="blue" @click="submit('Published')" label="Save & Publish" />
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    async submit(status) {
      try {
        const data = {
          ...this.product,
          sellingPrice: Number(this.product.sellingPrice),

          costPrice: Number(this.product.costPrice),

          quantityInStock: Number(this.product.quantityInStock),
          quantityInStock: Number(this.product.discountValue),
          dateAdded: new Date(
            `${this.product.dateAdded} ${this.product.timeAdded}`
          ).toUTCString(),
          returnPolicy: this.product.returnPolicy == "yes" ? true : false,
          status,
        };
        // dispatch action
        await this.$store.dispatch("inventory/publishProduct", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.action_button {
  margin-top: 2rem;
}
</style>
