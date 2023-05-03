<template>
  <div class="all">
    <div class="action_buttons">
      <h5>Inventory</h5>
      <ActionButton class="buttons" :product="product" />
    </div>
    <div class="creation_forms">
      <div class="hello">
        <q-form @submit.prevent class="q-pa-md shadow-2 details_form flex">
          <label>Product Name</label>
          <LongInput
            :placeholder="'Canon EOS Rebel T7'"
            v-model="product.productName"
            required
            class="long_input"
          />
          <SelectInput
            :label="'Select Product category'"
            :options="ui.ProductCategory"
            v-model="product.productCategory"
          />

          <div class="flex product_pricing">
            <LongInput
              :placeholder="'Selling price'"
              type="number"
              class="price_input"
              v-model="product.sellingPrice"
            />
            <LongInput
              :placeholder="'Cost price'"
              type="number"
              class="price_input"
              v-model="product.costPrice"
            />
          </div>
          <LongInput
            :placeholder="'Quantity in Stock'"
            type="number"
            v-model="product.quantityInStock"
          />
          <SelectInput
            :label="'Order Type'"
            :options="ui.orderType"
            v-model="product.orderType"
          />
          <div class="flex form_discount">
            <div class="discount_label">
              <label class="q-mr-md">Discount</label>
            </div>
            <div class="form_discounts">
              <label class="q-mr-md add_discount">Add Discount</label>
              <q-toggle v-model="product.value" color="blue" />
            </div>
          </div>
          <div class="flex discount_values">
            <SelectInput
              :label="'Type'"
              :options="ui.discountType"
              v-model="product.discountType"
              class="discount_input"
            />
            <LongInput
              :placeholder="'value'"
              class="discount_input"
              v-model="product.discountValue"
            />
          </div>
          <div class="flex expiry_date">
            <div class="expiry_label">
              <label class="q-mr-md">Expiry Date</label>
            </div>
            <div>
              <label class="q-mr-md add_expiry">Add Expiry Date</label>
              <q-toggle v-model="product.vals" color="blue" />
            </div>
          </div>
          <LongInput type="date" v-model="product.expiryDate" />
          <div>
            <label>Product Long Description</label>
            <TextEditor v-model="product.productLongDescription" />
            <span>Add a long description for your product</span>
          </div>
          <div class="flex return_policy q-pt-md">
            <div>
              <SelectInput
                :label="'Return Policy'"
                :options="ui.returnPolicy"
                v-model="product.returnPolicy"
                class="return"
              />
            </div>
            <div class="discount_policy">
              <label>Add Discount</label>
              <q-toggle v-model="product.val" color="blue" />
            </div>
          </div>
          <label>Date Added</label>
          <div class="flex time_date">
            <LongInput
              type="date"
              class="q-mr-md form_date_time"
              v-model="product.dateAdded"
            />
            <LongInput
              type="time"
              class="q-mr-md form_date_time"
              v-model="product.timeAdded"
            />
          </div>
        </q-form>
      </div>

      <q-form class="q-pa-sm shadow-2 q-mr-lg image_form">
        <div>
          <UploadFile v-model="product.imageUrl" class="q-pa-lg" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import LongInput from "./LongInput.vue";
import SelectInput from "./SelectInput.vue";
import TextEditor from "./TextEditor.vue";
import UploadFile from "./UploadFile.vue";
import ActionButton from "./ActionButton.vue";
import { mapGetters, mapActions } from "vuex";

import { api } from "../../boot/axios";

export default {
  name: "MainForm",
  components: { LongInput, SelectInput, UploadFile, ActionButton, TextEditor },
  props: {
    label: {
      type: String,
    },
    options: {
      type: Array,
    },
  },
  data() {
    return {
      ui: {
        ProductCategory: ["gadget", "automobile", "electronics", "groceries"],
        orderType: ["return", "purchase", "in stock", "out of stock"],
        discountType: ["fixed", "percentage"],
        returnPolicy: ["true", "false"],
      },
      product: {
        productName: "",
        productCategory: "",
        orderType: "",
        sellingPrice: "",
        costPrice: "",
        quantityInStock: "",
        discountType: "",
        discountValue: "",
        returnPolicy: "",
        dateAdded: "",
        // timeAdded: "",
        productLongDescription: "",
        // imageUrl: "",
        status: ["Draft", "Published"],
        expiryDate: "",
        // value: true,
        // vals: true,
        // val: false,
      },
    };
  },
  methods: {
    ...mapActions("inventory", ["publishProduct"]),
  },
};
</script>

<style scoped>
.creation_forms {
  gap: 3rem;
  flex-wrap: wrap;
  display: flex;
}

.details_form {
  min-width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.hello {
  margin: 0 auto;
}

.image_form {
  min-width: 30%;

  margin: 0 auto;
  margin-bottom: 1rem;
}
.product_pricing {
  flex-wrap: wrap;
  justify-content: space-between;
}
.price_input {
  width: 45%;
}
.form_discount {
  justify-content: space-between;
}
.discount_values {
  justify-content: space-between;
}
.discount_input {
  width: 45%;
}
.discount_policy {
  padding-top: 5.5px;
}
.discount_label {
  padding-top: 5.5px;
}
.add_discount {
  padding-left: 50px;
}
.add_expiry {
  padding-left: 10px;
}
.expiry_date {
  justify-content: space-between;
}
.expiry_label {
  padding-top: 5.5px;
}
.return_policy {
  justify-content: space-between;
}
.time_date {
  justify-content: space-between;
}
.form_date_time {
  width: 45%;
}
.action_buttons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
h5 {
  padding-left: 5rem;
}

@media (max-width: 760px) {
  .details_form {
    margin-left: 0;
  }
  .creation_forms {
    justify-content: center;
    padding: 1rem;
  }
  .image_form {
    min-width: 100%;
    margin: 0 auto;
  }
  .buttons {
    min-width: 1rem;
    margin-top: 0;
  }
  .return {
    width: 7rem;
  }

  .form_date_time {
    width: 40%;
  }
}

@media (min-width: 762px) {
  .image_form {
    min-width: 20%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .details_form {
    min-width: 50%;
  }
  .creation_forms {
    gap: 1rem;
  }
  .return {
    width: 12rem;
  }
}

@media (min-width: 1000px) {
  .details_form {
    min-width: 20%;
  }
  .image_form {
    min-width: 20%;
  }
  .creation_forms {
    justify-content: center;
  }
}

@media (min-width: 1027px) {
  .long_input {
    width: 40rem;
  }
  .image_form {
    width: 20rem;
  }
  .return {
    width: 18rem;
  }
}
</style>
