<template>
  <div class="q-pa-md">
    <q-table title="" :rows="rows" :columns="columns" row-key="name" />
    <div v-for="(product, index) in products" :key="index">
      {{ product.costPrice }}
    </div>
    j
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    const response = await this.getInventories();
    this.reponseData = response;
  },
  data() {
    return {
      products: [],
      columns: [
        {
          name: "productName",
          align: "center",
          label: "Product Name",
          field: "productName",
          sortable: true,
        },
        {
          name: "productCategory",
          label: "Poduct Category",
          field: "productCategory",
        },
        {
          name: "sellingPrice",
          label: "Selling Price",
          field: "sellingPrice",
          sortable: true,
        },
        { name: "discountValue", label: "Discount", field: "discountValue" },

        {
          name: "productLongDescription",
          label: "Description",
          field: "productLongDescription",
        },
        {
          name: "status",
          label: "Status",
          field: "status",
        },
        {
          name: "orderType",
          label: "Order Type",
          field: "orderType",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          name: "expiryDate",
          label: "Expiry Date",
          field: "expiryDate",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
      ],

      rows: [],
    };
  },

  methods: {
    async getInventories() {
      try {
        const response = await this.$api.get("/inventory/all");
        this.rows = response.data;
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },

  // mounted() {
  // this.getInventories()
  // //   this.$api.get("/inventory/admin/all?status=draft");
  // //   then((res) => {
  // //     this.data = res.data;
  // //   });
  // },
};
</script>
