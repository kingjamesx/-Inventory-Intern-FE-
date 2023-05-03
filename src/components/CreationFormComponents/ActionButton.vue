<template>
  <div class="q-pa-lg q-gutter-sm action_button">
    <q-btn
      color="primary"
      @click="
        submit('Draft');
        router.replace('/inventory');
      "
      label="Save as Draft"
    />

    <q-btn
      color="blue"
      @click="
        submit('Published');
        router.replace('/inventory');
      "
      label="Save & Publish"
    />
  </div>
</template>

<script>
import { useQuasar } from "quasar";
export default {
  props: ["product"],
  data(){
    return{
      $q: useQuasar()
    }
  },
  methods: {
    async submit(status) {
      try {
        const data = {
          ...this.product,
          sellingPrice: Number(this.product.sellingPrice),

          costPrice: Number(this.product.costPrice),

          quantityInStock: Number(this.product.quantityInStock),
          discountValue: Number(this.product.discountValue),
          // dateAdded: new Date(
          //   `${this.product.dateAdded} ${this.product.timeAdded}`
          // ).toUTCString(),
          returnPolicy: this.product.returnPolicy == "yes" ? true : false,
          // productLongDescription: this.product.productLongDescription == "",
          status,
        };
        this.$q.notify({
          type: "positive",
          message: "Inventory Created Sucessfully ",
          position: "top-right",
        })
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
  margin-top: 1rem;
}
</style>
